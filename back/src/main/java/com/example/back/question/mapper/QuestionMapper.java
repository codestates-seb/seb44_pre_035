package com.example.back.question.mapper;


import com.example.back.question.dto.QuestionPatchDto;
import com.example.back.question.dto.QuestionPostDto;
import com.example.back.question.dto.QuestionResponseDto;
import com.example.back.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
    QuestionResponseDto questionToQuestionResponseDto(Question question);
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);
}
