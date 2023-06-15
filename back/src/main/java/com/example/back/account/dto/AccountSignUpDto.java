package com.example.back.account.dto;

import com.example.back.account.entity.Account;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

@Data
@Setter(AccessLevel.NONE)
public class AccountSignUpDto {

    private String email;
    private String password;
    private String nickname;

    public Account toEntity() {
        return Account.builder().email(email)
                .password(password)
                .nickname(nickname)
                .build();
    }
}
