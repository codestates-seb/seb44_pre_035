package com.example.back.question.dto;

import com.example.back.question.entity.QuestionTag;
import com.example.back.question.validator.NotSpace;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class QuestionPatchDto {

    private long questionId;

    //private long accountId;

    @NotSpace(message = "제목이 비었습니다.")
    private String title;

    @NotSpace(message = "내용이 비었습니다.")
    private String content;

    private List<QuestionTagDto> questionTags;
}
