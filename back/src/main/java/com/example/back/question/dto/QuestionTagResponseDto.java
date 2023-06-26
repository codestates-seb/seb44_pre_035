package com.example.back.question.dto;


import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class QuestionTagResponseDto {
    private long tagId;
    private String tagName;
    private String tagContent;
}
