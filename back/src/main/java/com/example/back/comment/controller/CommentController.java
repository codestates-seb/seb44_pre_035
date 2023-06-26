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

import java.util.List;

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
    public ResponseEntity<CommentResponseDto> createComment(@PathVariable("answer-id") Long answerId,
                                                            @Validated @RequestBody CommentPostDto commentPostDto) {
        Comment comment = commentMapper.commentPostDtoToComment(commentPostDto);
        CommentResponseDto createdComment = commentMapper.commentToCommentResponseDto(commentService.createComment(answerId, commentPostDto));
        createdComment.setAnswerId(answerId);
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    @PatchMapping("/comments/{comment-id}")
    public ResponseEntity<CommentResponseDto> updateComment(@PathVariable("comment-id") Long commentId,
                                                            @Validated @RequestBody CommentPatchDto commentPatchDto) {
        Comment comment = commentMapper.commentPatchDtoToComment(commentPatchDto);
        CommentResponseDto updatedComment = commentMapper.commentToCommentResponseDto(commentService.updateComment(commentId, commentPatchDto));
        if (updatedComment != null) {
            return new ResponseEntity<>(updatedComment, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("comments/{comment-id}")
    public ResponseEntity<List<CommentResponseDto>> commentList() {
        List<CommentResponseDto> comments = commentService.getAllComments();
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }


        @DeleteMapping("/comments/{comment-id}")
        public ResponseEntity<Void> deleteComment (@PathVariable("comment-id") Long commentId){
            commentService.deleteComment(commentId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

