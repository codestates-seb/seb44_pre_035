package com.example.back.question.dto;

import com.example.back.question.validator.NotSpace;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Getter
public class QuestionPatchDto {
    @NotSpace
    private String title;

    @NotSpace
    private String content;
}
