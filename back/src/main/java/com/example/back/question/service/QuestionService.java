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

    Page<Question> searchQuestions(int page, int size, String criteria, String sort, String keyword);

    Page<Question> searchAnsweredQuestions(int page, int size, String criteria, String sort, String YorN);

    void deleteQuestion(Long questionId);

    Question updateQuestion(Long questionId, Question question);
}
