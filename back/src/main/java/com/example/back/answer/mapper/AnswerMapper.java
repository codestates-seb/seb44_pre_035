package com.example.back.answer.mapper;

import com.example.back.answer.dto.AnswerPatchDto;
import com.example.back.answer.dto.AnswerPostDto;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.entity.Answer;
import org.springframework.stereotype.Component;

@Component
public class AnswerMapper { //여기에 뭔가 문제가 있는 거 같은데 수정 예정
    public Answer dtoToEntity(AnswerPostDto dto) {
        Answer entity = new Answer();
        entity.setContent(dto.getContent());
        return entity;
    }

    public Answer dtoToEntity(AnswerPatchDto dto) {
        Answer entity = new Answer();
        entity.setAnswerId(dto.getAnswerId());
        entity.setContent(dto.getContent());
        return entity;
    }

    public AnswerResponseDto entityToDto(Answer entity) {
        return new AnswerResponseDto(entity.getAnswerId(), entity.getContent());
    }
}
