package com.example.back.question.mapper;


import com.example.back.answer.entity.Answer;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.question.dto.*;
import com.example.back.question.entity.Question;
import com.example.back.question.entity.QuestionTag;
import com.example.back.tag.dto.TagResponseDto;
import com.example.back.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question =  new Question();

        List<QuestionTag> questionTags = questionPostDto.getQuestionTags().stream()
                .map(questionTagDto -> {
                    QuestionTag questionTag = new QuestionTag();
                    Tag tag = new Tag();
                    tag.setTagId(questionTagDto.getTagId());
                    questionTag.addQuestion(question);
                    questionTag.addTag(tag);
                    return questionTag;
                }).collect(Collectors.toList());
        question.setQuestionTags(questionTags);
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setViews(0);

        return question;
    }

    default Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        Question question =  new Question();
        question.setQuestionTags(questionPatchDto.getQuestionTags().stream()
                .map(QuestionTagDto -> QuestionTag.builder()
                        .patchTagId(QuestionTagDto.getTagId())
                        .build())
                .collect(Collectors.toList()));
        question.setTitle(questionPatchDto.getTitle());
        question.setContent(questionPatchDto.getContent());

        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question){
        return QuestionResponseDto.builder()
                .questionId(question.getQuestionId())
                .accountId(question.getAccount().getId())
                .nickname(question.getAccount().getNickname())
                .title(question.getTitle())
                .content(question.getContent())
                .views(question.getViews())
                .answers(question.getAnswers())
                .tags(questionTagToQuestionTagResponseDtos(question.getQuestionTags()))
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
                .build();
    }

    default List<QuestionResponseDto> questionsToQuestionsResponseDtos(List<Question> questions) {
        return questions
                .stream()
                .map(question -> QuestionResponseDto
                        .builder()
                        .questionId(question.getQuestionId())
                        .accountId(question.getAccount().getId())
                        .nickname(question.getAccount().getNickname())
                        .title(question.getTitle())
                        .content(question.getContent())
                        .views(question.getViews())
                        .answers(question.getAnswers())
                        .tags(questionTagToQuestionTagResponseDtos(question.getQuestionTags()))
                        .createdAt(question.getCreatedAt())
                        .modifiedAt(question.getModifiedAt())
                        .build())
                .collect(Collectors.toList());
    }

    default List<AnswerResponseDto> AnswerListToAnswerResponseDto(List<Answer> answerList){
        return answerList.stream()
                .map(answer -> AnswerResponseDto
                        .builder()
                        .answerId(answer.getAnswerId())
                        .questionId(answer.getQuestion().getQuestionId())
                        .nickname(answer.getAccount().getNickname())
                        .accountId(answer.getAccount().getId())
                        .content(answer.getContent())
                        .build())
                .collect(Collectors.toList());
    }

    List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags);

    default List<QuestionTagResponseDto> questionTagToQuestionTagResponseDtos(List<QuestionTag> questionTags){
        return questionTags.stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
                        .tagId(questionTag.getTag().getTagId())
                        .tagName(questionTag.getTag().getTagName())
                        .tagContent(questionTag.getTag().getTagContent())
                        .build())
                .collect(Collectors.toList());
    }
}
