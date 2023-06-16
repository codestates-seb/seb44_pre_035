package com.example.back.account.jwt.filter;


import com.example.back.account.entity.Account;
import com.example.back.account.jwt.service.JwtService;
import com.example.back.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper;
import org.springframework.security.core.authority.mapping.NullAuthoritiesMapper;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RequiredArgsConstructor
public class JwtAuthenticationProcessingFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final AccountRepository accountRepository;

    private GrantedAuthoritiesMapper authoritiesMapper = new NullAuthoritiesMapper();

    private final String NO_CHECK_URL = "/login";


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        // 요청이 /login 이면 인증체크 거치지않고 진행
        if(request.getRequestURI().equals(NO_CHECK_URL)) {
            filterChain.doFilter(request, response);
            return;
        }

        //refreshToken 유효성 검사 수행
        String refreshToken = jwtService
                .extractRefreshToken(request)
                .filter(jwtService::isTokenValid)
                .orElse(null);


        //refreshToken 존재시 새로운 accessToken 발급
        if(refreshToken != null){
            checkRefreshTokenAndReIssueAccessToken(response, refreshToken);
            return;
        }

        //refreshToken 없으면 accessToken 검증후 인증처리
        checkAccessTokenAndAuthentication(request, response, filterChain);

    }

    private void checkAccessTokenAndAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        //accessToken 추출후 유효성 검사 진행후 인증객체 저장
        jwtService.extractAccessToken(request).filter(jwtService::isTokenValid).ifPresent(

                accessToken -> jwtService.extractUseremail(accessToken).ifPresent(

                        email -> accountRepository.findByEmail(email).ifPresent(

                                account -> saveAuthentication(account)
                        )
                )
        );

        //현재 필터 완료하고 다음으로 전달
        filterChain.doFilter(request,response);
    }

    //securityContext에 인증객체 저장 메서드
    private void saveAuthentication(Account account) {

        UserDetails user = User.builder()
                .username(account.getEmail())
                .password(account.getPassword())
                .roles(account.getRole().name())
                .build();

        Authentication authentication = new UsernamePasswordAuthenticationToken(user, null,authoritiesMapper.mapAuthorities(user.getAuthorities()));


        SecurityContext context = SecurityContextHolder.createEmptyContext();
        context.setAuthentication(authentication);
        SecurityContextHolder.setContext(context);
    }


    //refreshToken 으로 DB에서 조회후 계정에 accessToken 생성후 헤더에 포함후 전달
    private void checkRefreshTokenAndReIssueAccessToken(HttpServletResponse response, String refreshToken) {

        accountRepository.findByRefreshToken(refreshToken).ifPresent(
                account -> jwtService.sendAccessToken(response, jwtService.createAccessToken(account.getEmail()))
        );


    }
}
