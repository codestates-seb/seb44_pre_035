package com.example.back.question.dto;


import com.example.back.account.entity.Account;
import com.example.back.answer.entity.Answer;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
public class QuestionResponseDto {
    private long questionId;
    private long accountId;
    private String title;
    private String content;
    private int views;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdAt;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime modifiedAt;

    public void setAccount(Account account){
        this.accountId = account.getId();
    }
}
