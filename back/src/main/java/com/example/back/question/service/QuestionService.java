package com.example.back.question.service;

import com.example.back.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public interface QuestionService {
    Question createQuestion(Question question);

    Question findQuestion(Long questionId);

    Page<Question> findQuestions(int page, int size, String criteria, String sort);

    void deleteQuestion(Long questionId);

    Question updateQuestion(Question question);
}
