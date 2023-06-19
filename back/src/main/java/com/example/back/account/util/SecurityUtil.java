package com.example.back.account.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class SecurityUtil {

    //현재 로그인한 사용자 이메일
    //로그인 하지 않은 상태에선 userdetails로 형변환시 형변환오류 발생
    //따라서 로그인 하지 않았다면 string으로 반환하는 조건
    public static String getLoginUsername() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Object principal = authentication.getPrincipal();
        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            return userDetails.getUsername();
        }
        else if (principal instanceof String) {
            return (String) principal;
        }

        return null;
    }
}