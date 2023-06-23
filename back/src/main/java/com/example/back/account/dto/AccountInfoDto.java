package com.example.back.account.dto;


import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.question.dto.QuestionResponseDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;


@Data
@Setter(AccessLevel.NONE)
public class AccountInfoDto {

    private Long accountId;
    private String nickname;
    private String email;
    private List<QuestionResponseDto> questionList;
    private List<AnswerResponseDto> answerList;
    private final boolean isEditable;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdAt;

    private Long reputation;
    private Long questionCount;
    private Long answerCount;

    private String profileImagePath;

    public AccountInfoDto(Long accountId, String nickname, String email, List<QuestionResponseDto> questionList, List<AnswerResponseDto> answerList, boolean isEditable, LocalDateTime createdAt, Long reputation, Long questionCount, Long answerCount, String profileImagePath) {
        this.accountId = accountId;
        this.nickname = nickname;
        this.email = email;
        this.questionList = questionList;
        this.answerList = answerList;
        this.isEditable = isEditable;
        this.createdAt = createdAt;
        this.reputation = reputation;
        this.questionCount = questionCount;
        this.answerCount = answerCount;
        this.profileImagePath = profileImagePath;
    }
}
