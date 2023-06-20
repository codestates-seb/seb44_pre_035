package com.example.back.question.service;

import com.example.back.answer.entity.Answer;
import com.example.back.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface QuestionService {
    Question createQuestion(Question question);

    Question findQuestion(long questionId);

    List<Answer> findQuestionAnswer(Question question);

    Page<Question> findQuestions(int page, int size, String criteria, String sort);

    void deleteQuestion(Long questionId);

    Question updateQuestion(Question question);
}
