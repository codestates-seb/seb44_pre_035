package com.example.back.question.dto;

import com.example.back.question.entity.QuestionTag;
import com.example.back.question.validator.NotSpace;
import com.example.back.tag.entity.Tag;
import lombok.Getter;

import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import com.example.back.account.entity.Account;

import java.util.List;

@Getter
public class QuestionPostDto {

    //private long accountId;

    @NotSpace(message = "제목이 비었습니다.")
    private String title;

    @NotSpace(message = "내용이 비었습니다.")
    private String content;

    private List<QuestionTagDto> questionTags;

    /*
    public Account getAccount(){
        Account account = new Account();
        account.setAccountId(accountId);
        return account;
    } */

}
