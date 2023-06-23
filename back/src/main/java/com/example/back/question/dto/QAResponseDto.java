package com.example.back.question.dto;

import com.example.back.answer.entity.Answer;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class QAResponseDto<T> {
    private T data;
    private T answerList;

    public QAResponseDto(T question, T answerList) {
        this.data = question;
        this.answerList = answerList;
    }
}
