package com.example.back.question.repository;

import com.example.back.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
