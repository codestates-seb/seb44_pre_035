package com.example.back.comment.service;

import com.example.back.account.repository.AccountRepository;
import com.example.back.account.util.SecurityUtil;
import com.example.back.answer.dto.AnswerPatchDto;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.repository.AnswerRepository;
import com.example.back.comment.dto.CommentPatchDto;
import com.example.back.comment.dto.CommentPostDto;
import com.example.back.comment.dto.CommentResponseDto;
import com.example.back.comment.entity.Comment;
import com.example.back.comment.mapper.CommentMapper;
import com.example.back.comment.repository.CommentRepository;
import com.example.back.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
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

    //    @Override
//    public Comment createComment(Long answerId, CommentPostDto commentPostDto) {
//        Comment comment = commentMapper.commentPostDtoToComment(commentPostDto);
//        comment.setAnswerId(answerId);
//        Comment savedComment = commentRepository.save(comment);
//        return savedComment;
//    }
//@Override
//public CommentResponseDto createComment(Long answerId, CommentPostDto commentPostDto) {
//    Comment comment = commentMapper.commentPostDtoToComment(commentPostDto);
//    comment.setAnswer(answerRepository.findById(answerId).orElseThrow());
//    Comment createdComment = commentRepository.save(comment);
//    return commentMapper.commentToCommentResponseDto(createdComment);
//}
    @Override
    public Comment createComment(Long answerId, CommentPostDto commentPostDto) {
        Comment comment = commentMapper.commentPostDtoToComment(commentPostDto);
        //String userEmail = SecurityUtil.getLoginUsername();
        //Account account = accountRepository.findByEmail(userEmail).orElseThrow();
        //comment.setAccount(account);
        comment.setAnswer(answerRepository.findById(answerId).orElseThrow());
        Comment createdComment = commentRepository.save(comment);
        return createdComment;
    }


    @Override
    public Comment updateComment(Long commentId, CommentPatchDto commentPatchDto) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);

        /* if (optionalComment.isPresent()) {

            //String loggedInUserEmail = SecurityUtil.getLoginUsername();
            if (comment.getAccount().getEmail().equals(loggedInUserEmail)) {
                comment.setContent(commentPatchDto.getContent());
                comment.setModifiedAt(LocalDateTime.now());
                Comment updatedComment = commentRepository.save(comment);
                return updatedComment;
            } else {
                throw new AccessDeniedException("본인이 작성한 댓글만 수정 가능합니다.");
            }
        } else {
            throw new NoSuchElementException("해당 id 값으로 조회되는 댓글이 존재하지 않습니다.");
        }
        */
        Comment comment = optionalComment.get();
        comment.setContent(commentPatchDto.getContent());
        comment.setModifiedAt(LocalDateTime.now());
        Comment updatedComment = commentRepository.save(comment);
        return updatedComment;
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
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        if(optionalComment.isPresent()) {
            /*
            String loggedInUserEmail = SecurityUtil.getLoginUsername();
            if (comment.getAccount().getEmail().equals(loggedInUserEmail)) {
                commentRepository.deleteById(commentId);
            } else throw new AccessDeniedException("본인이 작성한 댓글만 삭제 가능합니다.");
        } else {
            throw new NoSuchElementException("해당 id 값으로 조회되는 댓글이 존재하지 않습니다." + commentId);
        }

             */
            commentRepository.deleteById(commentId);}
    }
}
