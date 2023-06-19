package com.example.back.answer.service;

import com.example.back.answer.dto.AnswerPatchDto;
import com.example.back.answer.dto.AnswerPostDto;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.mapper.AnswerMapper;
import com.example.back.answer.repository.AnswerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerServiceImpl implements AnswerService {
    private final AnswerRepository answerRepository;
    private final AnswerMapper answerMapper;


    @Override
    public AnswerResponseDto createAnswer(AnswerPostDto answerPostDto) {
        Answer answer = answerMapper.answerPostDtoToAnswer(answerPostDto);
        Answer createdAnswer = answerRepository.save(answer);
        return answerMapper.answerToAnswerResponseDto(createdAnswer);
    }

    @Override
    public AnswerResponseDto updateAnswer(Long id, AnswerPatchDto answerPatchDto) {
        Answer answer = answerRepository.findById(id).orElse(null);
        if (answer != null) {
            answer.setContent(answerPatchDto.getContent());
            return answerMapper.answerToAnswerResponseDto(answer);
        }
        return null; // or throw an exception indicating that the answer with the given id was not found
    }

    @Override
    public AnswerResponseDto getAnswer(Long id) {
        Answer answer = answerRepository.findById(id).orElse(null);
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
    public void deleteAnswer(Long id) {
        answerRepository.deleteById(id);
    }

}
