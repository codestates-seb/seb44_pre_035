package com.example.back.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerPostDto {
    @NotBlank(message = "빈내용ㄴㄴ")
    private String content;
}

