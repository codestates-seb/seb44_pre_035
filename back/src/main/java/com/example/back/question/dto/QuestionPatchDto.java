package com.example.back.question.dto;

import com.example.back.question.validator.NotSpace;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;


public class QuestionPatchDto {
    private long QuestionId;

    @NotSpace
    private String title;

    @NotSpace
    private String content;

    @CreatedDate
    private LocalDateTime createdDate;

    @LastModifiedDate
    private LocalDateTime modifiedDate;

    public void setQuestionId(long QuestionId) {
        this.QuestionId = QuestionId;
    }
}
