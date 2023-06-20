package com.example.back.question.dto;

import com.example.back.answer.entity.Answer;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;


@Getter
public class MultiResponseDto<T> {
    private List<T> questions;
    private PageInfo pageInfo;

    public MultiResponseDto(List<T> questions, Page page) {
        this.questions = questions;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }
}
