package com.example.back.account.login.handler;

import com.example.back.account.jwt.service.JwtService;
import com.example.back.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
public class LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtService jwtService;
    private final AccountRepository accountRepository;


    //사용자 인증 성공시 액세스토큰과 리프레시토큰 생성
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        String email = extractUsername(authentication);
        String accessToken = jwtService.createAccessToken(email);
        String refreshToken = jwtService.createRefreshToken();

        jwtService.sendAccessAndRefreshToken(response, accessToken, refreshToken);

        accountRepository.findByEmail(email).ifPresent(
                account -> {
                    account.updateRefreshToken(refreshToken);
                    accountRepository.save(account);
                }
        );

        //로그
        log.info( "로그인 성공. email: {}" ,email);
        log.info( "AccessToken 발급 : {}" ,accessToken);
        log.info( "RefreshToken 발급 : {}" ,refreshToken);
    }

    private String extractUsername(Authentication authentication){
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return userDetails.getUsername();
    }
}
