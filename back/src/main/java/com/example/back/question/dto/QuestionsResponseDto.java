package com.example.back.question.dto;


import com.example.back.account.entity.Account;
import com.example.back.tag.entity.Tag;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;


@Getter
@Builder
public class QuestionsResponseDto {
    private long questionId;
    private long accountId;
    private String nickname;
    private String title;
    private String content;
    private int views;
    private List<QuestionTagResponseDto> tags;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdAt;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime modifiedAt;

    public void setAccount(Account account){
        this.accountId = account.getId();
    }
}
