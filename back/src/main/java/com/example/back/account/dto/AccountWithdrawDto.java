package com.example.back.account.dto;


import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Data
@Setter(AccessLevel.NONE)
public class AccountWithdrawDto {

    @NotBlank(message = "비밀번호를 입력해주세요")
    private String checkPassword;

}
