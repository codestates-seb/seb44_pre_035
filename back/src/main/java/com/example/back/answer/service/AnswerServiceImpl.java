package com.example.back.answer.service;

import com.example.back.account.entity.Account;
import com.example.back.account.repository.AccountRepository;
import com.example.back.account.util.SecurityUtil;
import com.example.back.answer.dto.AnswerPatchDto;
import com.example.back.answer.dto.AnswerPostDto;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.mapper.AnswerMapper;
import com.example.back.answer.repository.AnswerRepository;
import com.example.back.comment.entity.Comment;
import com.example.back.comment.repository.CommentRepository;
import com.example.back.question.entity.Question;
import com.example.back.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerServiceImpl implements AnswerService {
    private final AnswerRepository answerRepository;
    private final AnswerMapper answerMapper;
    private final AccountRepository accountRepository;
    private final QuestionRepository questionRepository;
    private final CommentRepository commentRepository;


    /**/
    @Override
    public AnswerResponseDto createAnswer(Long questionId, AnswerPostDto answerPostDto) {
        Answer answer = answerMapper.answerPostDtoToAnswer(answerPostDto);

        //String userEmail = SecurityUtil.getLoginUsername();
        //Account account = accountRepository.findByEmail(userEmail).orElseThrow();
        //answer.setAccount(account);

        Question question = questionRepository.findById(questionId).orElseThrow();
        question.setAnswers(question.getAnswers()+1);
        questionRepository.saveAndFlush(question);

        answer.setQuestion(question);
        Answer createdAnswer = answerRepository.save(answer);
        return answerMapper.answerToAnswerResponseDto(createdAnswer);
    }

    @Override
    public AnswerResponseDto updateAnswer(Long answerId, AnswerPatchDto answerPatchDto) {
        Answer answer = answerRepository.findById(answerId).orElse(null);
        /*
        if (answer != null) {
            String loggedInUserEmail = SecurityUtil.getLoginUsername();
            if (answer.getAccount().getEmail().equals(loggedInUserEmail)) {

            } else {
                throw new AccessDeniedException("본인이 작성한 답변만 수정 가능합니다.");
            }
        } else {
            throw new NoSuchElementException("해당 id 값으로 조회되는 답변이 존재하지 않습니다." + answerId);
        }
        */
        answer.setContent(answerPatchDto.getContent());
        answer.setModifiedAt(LocalDateTime.now());
        return answerMapper.answerToAnswerResponseDto(answer);
    }

    @Override
    public AnswerResponseDto getAnswer(Long answerId) {
        Answer answer = answerRepository.findById(answerId).orElse(null);
        if (answer != null) {
            AnswerResponseDto answerResponse = answerMapper.answerToAnswerResponseDto(answer);
            return answerResponse;
        }
        return null; // or throw an exception indicating that the answer with the given id was not found
    }

    @Override
    public List<AnswerResponseDto> getAllAnswers() {
        List<Answer> answers = answerRepository.findAll();
        return answerMapper.answersToAnswerResponseDtos(answers);
    }

    @Override
    public void deleteAnswer(Long answerId) {
        Answer answer = answerRepository.findById(answerId).orElse(null);
        /*
        if (answer != null) {
            String loggedInUserEmail = SecurityUtil.getLoginUsername();
            if (answer.getAccount().getEmail().equals(loggedInUserEmail)) {

            } else {
                throw new AccessDeniedException("본인이 작성한 답변만  삭제 가능합니다.");
            }
        } else {
            throw new NoSuchElementException("해당 id 값으로 조회되는 답변이 존재하지 않습니다." + answerId);
        }
        */
        answerRepository.deleteById(answerId);
    }

    @Override
    public List<Comment> findAnswerComment(Answer answer){
        return commentRepository.findAllByAnswer(answer);
    }

}
