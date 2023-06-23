package com.example.back.comment.service;

import com.example.back.account.repository.AccountRepository;
import com.example.back.answer.repository.AnswerRepository;
import com.example.back.comment.dto.CommentPatchDto;
import com.example.back.comment.dto.CommentPostDto;
import com.example.back.comment.dto.CommentResponseDto;
import com.example.back.comment.entity.Comment;
import com.example.back.comment.mapper.CommentMapper;
import com.example.back.comment.repository.CommentRepository;
import com.example.back.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;
    private final AccountRepository accountRepository;
    private final QuestionRepository questionRepository;
    private  final AnswerRepository answerRepository;

    @Override
    public Comment createComment(Long answerId, CommentPostDto commentPostDto) {
        Comment comment = commentMapper.commentPostDtoToComment(commentPostDto);
        comment.setAnswerId(answerId);
        Comment savedComment = commentRepository.save(comment);
        return savedComment;
    }

    @Override
    public Comment updateComment(Long commentId, CommentPatchDto commentPatchDto) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        if (optionalComment.isPresent()) {
            Comment comment = optionalComment.get();
            comment.setContent(commentPatchDto.getContent());
            Comment updatedComment = commentRepository.save(comment);
            return updatedComment;
        }
        return null;
    }

    @Override
    public Comment getComment(Long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        return optionalComment.orElse(null);
    }

    @Override
    public List<CommentResponseDto> getAllComments() {
        List<Comment> comments = commentRepository.findAll();
        return commentMapper.commentsToCommentResponseDtos(comments);
    }

    @Override
    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }
}
