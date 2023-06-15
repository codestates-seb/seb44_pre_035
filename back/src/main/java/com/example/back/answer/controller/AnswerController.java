package com.example.back.answer.controller;

import com.example.back.answer.dto.AnswerPatchDto;
import com.example.back.answer.dto.AnswerPostDto;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.mapper.AnswerMapper;
import com.example.back.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/answers")
@Validated
public class AnswerController {
    private final AnswerService answerService; //서비스클래스 작성 아직 못함...금요일까지는 어떻게든 할게요!
    private final AnswerMapper answerMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

    @PostMapping
    public ResponseEntity<AnswerResponseDto> postAnswer(@Valid @RequestBody AnswerPostDto answerDto) {
        Answer answer = answerMapper.dtoToEntity(answerDto);
        Answer createdAnswer = answerService.createAnswer(answer); //이 오류도 오늘 안에 해결해서 다시 올릴게요...
        AnswerResponseDto responseDto = answerMapper.entityToDto(createdAnswer);
        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @PatchMapping("/{answerId}")
    public ResponseEntity<AnswerResponseDto> patchAnswer(
            @PathVariable("answerId") @Positive long answerId,
            @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer updatedAnswer = answerService.updateAnswer(answerMapper.dtoToEntity(answerPatchDto)); //여기도.. 매퍼문제인가..
        AnswerResponseDto responseDto = answerMapper.entityToDto(updatedAnswer);
        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @GetMapping("/{answerId}")
    public ResponseEntity<AnswerResponseDto> getAnswer(@PathVariable("answerId") @Positive long answerId) {
        Answer answer = answerService.getAnswer(answerId); //지금은 모르겠고.. 아무튼 여기도.. 오늘 내로...
        AnswerResponseDto responseDto = answerMapper.entityToDto(answer);
        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<AnswerResponseDto>> getAnswers() {
        List<Answer> answers = answerService.getAnswers(); //마찬가지.. 아무턴 파이팅.. 읽으신 분들.. 답답하시겠지만 미안하지만 파이팅..
        List<AnswerResponseDto> responseDtoList = answers.stream()
                .map(answerMapper::entityToDto)
                .collect(Collectors.toList());
        return new ResponseEntity<>(responseDtoList, HttpStatus.OK);
    }

    @DeleteMapping("/{answerId}")
    public ResponseEntity<Void> deleteAnswer(@PathVariable("answerId") @Positive long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
// 저의 역량은 미미합니다.. 죄송해요... 하지만 자정내로 오류를 해결하고, 금요일까지는 꼭 꼭 서비스클래스를 채울게요..
// 제가 섹션3를 복습하면서.. 약간 무지성으로 이렇게 하겠거니 해서 코드를 쓰고 고치고 그러고 있는데요..
// 아무튼 파이팅하겠습니다.. 여기를 읽고 계신 분이 있다면... 파이팅......!ㅎㅎ