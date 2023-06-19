package com.example.back.account.dto;


import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

@Data
@Setter(AccessLevel.NONE)
public class AccountAllInfoDto {

    private Long accountId;
    private String nickname;
    private String email;

    //임시로 동작만 확인하게 생성자 적용
    public AccountAllInfoDto(Long accountId, String nickname, String email) {
        this.accountId = accountId;
        this.nickname = nickname;
        this.email = email;
    }
}
