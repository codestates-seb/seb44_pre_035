package com.example.back.answer.service;

import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.entity.Answer;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnswerService {   //아직 못했습니다... 공부하면서 채우는 중입니다.. 하지만 금요일까지는 어떻게든 꼭 채워서 올릴게요..진짜로 화이팅!!
    public AnswerResponseDto createAnswer(Answer answer) {

        return new AnswerResponseDto();
    }

    public AnswerResponseDto updateAnswer(Answer answer) {

        return new AnswerResponseDto();
    }

    public AnswerResponseDto getAnswerById(Long id) {

        return new AnswerResponseDto();
    }

    public List<AnswerResponseDto> getAllAnswers() {

        return new ArrayList<>();
    }

    public void deleteAnswer(Long id) {

        return 몰라;
    }
}
