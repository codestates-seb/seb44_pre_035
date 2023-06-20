package com.example.back.answer.repository;

import com.example.back.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findAllByAccount(Long accountId);

    List<Answer> findAllByQuestion(Long questionId);
}
