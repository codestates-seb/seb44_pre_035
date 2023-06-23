package com.example.back.question.repository;

import com.example.back.question.entity.Question;
import com.example.back.question.entity.QuestionTag;
import com.example.back.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
    QuestionTag findByQuestionAndTag(Question Question, Tag Tag);
}
