package com.example.back.question.dto;


import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Builder
@Getter
public class QuestionResponseDto {
    private long QuestionId;

    /*
    private long AccountId;
    */

    private String title;

    private String content;

    private LocalDateTime createdDate;

    private LocalDateTime modifiedDate;
}
