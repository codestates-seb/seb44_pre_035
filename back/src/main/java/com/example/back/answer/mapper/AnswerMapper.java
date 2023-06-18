package com.example.back.answer.mapper;

import com.example.back.answer.dto.AnswerPatchDto;
import com.example.back.answer.dto.AnswerPostDto;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.repository.AnswerRepository;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToDtoAnswer(AnswerPatchDto answerPatchDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
}
