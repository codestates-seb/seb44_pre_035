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
import com.example.back.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerServiceImpl implements AnswerService {
    private final AnswerRepository answerRepository;
    private final AnswerMapper answerMapper;
    private final AccountRepository accountRepository;
    private final QuestionRepository questionRepository;


    /**/
    @Override
    public AnswerResponseDto createAnswer(Long questionId, AnswerPostDto answerPostDto) {
        Answer answer = answerMapper.answerPostDtoToAnswer(answerPostDto);

        String userEmail = SecurityUtil.getLoginUsername();
        Account account = accountRepository.findByEmail(userEmail).orElseThrow();
        answer.setAccount(account);

        answer.setQuestion(questionRepository.findById(questionId).orElseThrow());
        Answer createdAnswer = answerRepository.save(answer);
        return answerMapper.answerToAnswerResponseDto(createdAnswer);
    }

    @Override
    public AnswerResponseDto updateAnswer(Long answerId, AnswerPatchDto answerPatchDto) {
        Answer answer = answerRepository.findById(answerId).orElse(null);
        if (answer != null) {
            answer.setContent(answerPatchDto.getContent());
            answer.setModifiedAt(LocalDateTime.now());
            return answerMapper.answerToAnswerResponseDto(answer);
        }
        return null; // or throw an exception indicating that the answer with the given id was not found
    }

    @Override
    public AnswerResponseDto getAnswer(Long answerId) {
        Answer answer = answerRepository.findById(answerId).orElse(null);
        if (answer != null) {
            return answerMapper.answerToAnswerResponseDto(answer);
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
        answerRepository.deleteById(answerId);
    }

}
