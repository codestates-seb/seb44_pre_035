package com.example.back.comment.service;

import com.example.back.comment.dto.CommentPatchDto;
import com.example.back.comment.dto.CommentPostDto;
import com.example.back.comment.dto.CommentResponseDto;
import com.example.back.comment.entity.Comment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentService {

    Comment createComment(Long answerId, CommentPostDto commentPostDto);
    Comment updateComment(Long CommentId, CommentPatchDto commentPatchDto);
    Comment getComment(Long commentId);
    List<CommentResponseDto> getAllComments();
    void deleteComment(Long commentId);


}

