package com.example.back.question.dto;

import com.example.back.question.validator.NotSpace;
import lombok.Getter;

import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import com.example.back.account.entity.Account;

@Getter
public class QuestionPostDto {

    @NotSpace
    private String title;

    @NotSpace
    private String content;

    /*
    public Account getAccount(){
        Account account = new Account();
        account.setAccountId(accountId);
        return account;
    } */
}
