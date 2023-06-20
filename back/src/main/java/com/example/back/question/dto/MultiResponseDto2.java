package com.example.back.question.dto;

import com.example.back.answer.entity.Answer;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;


@Getter
public class MultiResponseDto2<T> {
    private T question;
    private List<Answer> answers;

    public MultiResponseDto2(T question, List<Answer> answers) {
        this.question = question;
        this.answers = answers;
    };
}
