package com.example.back.answer.service;

import com.example.back.answer.dto.AnswerPatchDto;
import com.example.back.answer.dto.AnswerPostDto;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.entity.Answer;
import com.example.back.comment.entity.Comment;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface AnswerService {

    AnswerResponseDto createAnswer(Long questionId, AnswerPostDto answerPostDto);

    AnswerResponseDto updateAnswer(Long answerId, AnswerPatchDto answerPatchDto);

    AnswerResponseDto getAnswer(Long answerId);

    List<AnswerResponseDto> getAllAnswers();

    void deleteAnswer(Long answerId);

    List<Comment> findAnswerComment(Answer answer);
}
