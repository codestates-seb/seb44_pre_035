package com.example.back.comment.controller;

import com.example.back.comment.dto.CommentPatchDto;
import com.example.back.comment.dto.CommentPostDto;
import com.example.back.comment.dto.CommentResponseDto;
import com.example.back.comment.entity.Comment;
import com.example.back.comment.mapper.CommentMapper;
import com.example.back.comment.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@Validated
@RequestMapping("/questions/{question-id}/answers/{answer-id}")
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper commentMapper;

    public CommentController(CommentService commentService, CommentMapper commentMapper) {
        this.commentService = commentService;
        this.commentMapper = commentMapper;
    }

    @PostMapping("/comments")
    public ResponseEntity<CommentResponseDto> createComment(@PathVariable("answerId") Long answerId,
                                                            @Validated @RequestBody CommentPostDto commentPostDto) {
        Comment comment = commentMapper.commentPostDtoToComment(commentPostDto);
        CommentResponseDto createdComment = commentMapper.commentToCommentResponseDto(commentService.createComment(answerId, commentPostDto));
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    @PatchMapping("/comments/{comment-id}")
    public ResponseEntity<CommentResponseDto> updateComment(@PathVariable("commentId") Long commentId,
                                                            @Validated @RequestBody CommentPatchDto commentPatchDto) {
        Comment comment = commentMapper.commentPatchDtoToComment(commentPatchDto);
        CommentResponseDto updatedComment = commentMapper.commentToCommentResponseDto(commentService.updateComment(commentId, commentPatchDto));
        if (updatedComment != null) {
            return new ResponseEntity<>(updatedComment, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/comments/{comment-id}")
    public ResponseEntity<Void> deleteComment(@PathVariable("commentId") Long commentId) {
        commentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
