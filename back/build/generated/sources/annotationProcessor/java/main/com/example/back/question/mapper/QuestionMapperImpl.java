package com.example.back.question.mapper;

import com.example.back.question.dto.QuestionResponseDto;
import com.example.back.question.dto.QuestionResponseDto.QuestionResponseDtoBuilder;
import com.example.back.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-19T07:55:18+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDtoBuilder questionResponseDto = QuestionResponseDto.builder();

        if ( question.getQuestionId() != null ) {
            questionResponseDto.questionId( question.getQuestionId() );
        }
        questionResponseDto.title( question.getTitle() );
        questionResponseDto.content( question.getContent() );
        questionResponseDto.createdAt( question.getCreatedAt() );
        questionResponseDto.modifiedAt( question.getModifiedAt() );

        return questionResponseDto.build();
    }
}
