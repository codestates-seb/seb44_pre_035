package com.example.back.question.dto;

import lombok.Getter;
import org.springframework.security.core.parameters.P;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@Getter
@Valid
public class QuestionTagDto {

    @Positive(message = "Tag ID는 1 이상의 자연수만 가능합니다.")
    private long tagId;
}
