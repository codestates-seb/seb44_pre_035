package com.example.back.comment.repository;

import com.example.back.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

//    List<Comment> findAllByAnswer(Answer answer);
}
