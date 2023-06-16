package com.example.back.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class QuestionPostDto {

    @Positive
    private long questionId;

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    /*
    public Account getAccount(){
        Account account = new Account();
        account.setAccountId(accountId);
        return account;
    }

    * */
}
