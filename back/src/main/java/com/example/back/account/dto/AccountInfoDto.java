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

    public AccountInfoDto(Long id, String nickname, String email, boolean isEditable) {
        this.accountId = id;
        this.nickname = nickname;
        this.email = email;
        this.isEditable = isEditable;
    }
}
