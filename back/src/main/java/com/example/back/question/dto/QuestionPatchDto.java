package com.example.back.question.dto;

import com.example.back.question.validator.NotSpace;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Getter
public class QuestionPatchDto {
    private long questionId;

    @NotSpace
    private String title;

    @NotSpace
    private String content;

    @LastModifiedDate
    private LocalDateTime modifiedAt;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }
}
