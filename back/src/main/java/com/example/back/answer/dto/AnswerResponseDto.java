package com.example.back.answer.dto;

import com.example.back.account.entity.Account;
import com.example.back.comment.dto.CommentResponseDto;
import com.example.back.comment.entity.Comment;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private long accountId;
    private long questionId;
    private String content;
    private String nickname;
    private String profileImagePath;

    private List<CommentResponseDto> commentList = new ArrayList<>();

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdAt;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime modifiedAt;

    public void setAccount(Account account) {
        this.accountId = account.getId();
        this.nickname = account.getNickname();
        this.profileImagePath = account.profileImagePath();
    }
}
