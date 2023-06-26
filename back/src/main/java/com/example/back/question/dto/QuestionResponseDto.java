package com.example.back.question.dto;


import com.example.back.account.entity.Account;
import com.example.back.answer.entity.Answer;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.example.back.tag.entity.Tag;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;


@Getter
@Builder
public class QuestionResponseDto {
    private long questionId;
    private long accountId;
    private String nickname;
    private String title;
    private String content;
    private int views;
    private int answers;
    private List<QuestionTagResponseDto> tags;
    private String profileImagePath;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdAt;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime modifiedAt;

    public void setAccount(Account account){
        this.accountId = account.getId();
        this.profileImagePath = account.profileImagePath();
        this.nickname = account.getNickname();
    }
}
