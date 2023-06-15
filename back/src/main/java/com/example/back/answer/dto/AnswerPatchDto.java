package com.example.back.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerPatchDto {
    private long answerId;

    @NotBlank(message = "빈내용 ㄴㄴ")
    private String content;
}
