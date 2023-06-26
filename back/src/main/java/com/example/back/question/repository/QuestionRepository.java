package com.example.back.question.repository;

import com.example.back.account.entity.Account;
import com.example.back.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findAllByAccount(Account account);

    Page<Question> findByAnswersLessThan(int answers, Pageable pageable);

    Page<Question> findByAnswersGreaterThan(int answers, Pageable pageable);

    Page<Question> findByTitleContainingOrContentContaining(String title, String content, Pageable pageable);

    Page<Question> findByAnswersLessThanAndTitleContainingOrContentContaining(int answers, String title, String content, Pageable pageable);

    Page<Question> findByAnswersGreaterThanAndTitleContainingOrContentContaining(int answers, String title, String content, Pageable pageable);
}
