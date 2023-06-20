package com.example.back.question.dto;

import lombok.Getter;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import com.example.back.account.entity.Account;

@Getter
public class QuestionPostDto {

    @NotNull
    private String title;

    @NotBlank
    private String content;

    /*
    public Account getAccount(){
        Account account = new Account();
        account.setAccountId(accountId);
        return account;
    } */
}
