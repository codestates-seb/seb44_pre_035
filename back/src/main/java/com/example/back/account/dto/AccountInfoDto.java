package com.example.back.account.dto;


import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;


@Data
@Setter(AccessLevel.NONE)
public class AccountInfoDto {

    private Long accountId;
    private String nickname;
    private String email;
//    private List<QuestionDto> questionList;
//    private List<AnswerDto> answerList;
    private final boolean isEditable;

    public AccountInfoDto(Long id, String nickname, String email, boolean isEditable) {
        this.accountId = id;
        this.nickname = nickname;
        this.email = email;
        this.isEditable = isEditable;
    }
}
