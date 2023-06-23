package com.example.back.answer.repository;

import com.example.back.account.entity.Account;
import com.example.back.answer.entity.Answer;
import com.example.back.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    List<Answer> findAllByAccount(Account account);

    List<Answer> findAllByQuestion(Question question);
}
