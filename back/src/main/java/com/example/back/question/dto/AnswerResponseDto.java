package com.example.back.question.dto;


import lombok.Getter;

import java.util.List;

@Getter
public class AnswerResponseDto<T> {
    private List<T> data;

    public AnswerResponseDto(List<T> data){
        this.data = data;
    };
}
