package com.example.back.question.mapper;


import com.example.back.question.dto.QuestionPatchDto;
import com.example.back.question.dto.QuestionPostDto;
import com.example.back.question.dto.QuestionResponseDto;
import com.example.back.question.entity.Question;
import com.example.back.question.repository.QuestionRepository;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto){
        return new Question(questionPostDto.getTitle(),
                questionPostDto.getContent());
    };
    default Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto){
        return new Question(questionPatchDto.getQuestionId(),
                questionPatchDto.getTitle(), questionPatchDto.getContent());
    };
    QuestionResponseDto questionToQuestionResponseDto(Question question);
    default List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions){
        return questions
                .stream()
                .map(question -> QuestionResponseDto
                        .builder()
                        .questionId(question.getQuestionId())
                        .title(question.getTitle())
                        .content(question.getContent())
                        .createdAt(question.getCreatedAt())
                        .modifiedAt(question.getModifiedAt())
                        .build())
                .collect(Collectors.toList());
    };
}
