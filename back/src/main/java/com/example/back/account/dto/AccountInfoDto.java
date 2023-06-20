package com.example.back.account.dto;


import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.question.dto.QuestionResponseDto;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

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

    public AccountInfoDto(Long accountId, String nickname, String email, List<QuestionResponseDto> questionList, List<AnswerResponseDto> answerList, boolean isEditable) {
        this.accountId = accountId;
        this.nickname = nickname;
        this.email = email;
        this.questionList = questionList;
        this.answerList = answerList;
        this.isEditable = isEditable;
    }
}
