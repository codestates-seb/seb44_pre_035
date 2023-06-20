package com.example.back.answer.controller;

import com.example.back.answer.dto.AnswerPatchDto;
import com.example.back.answer.dto.AnswerPostDto;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.service.AnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/questions/{question-id}/answers")
public class AnswerController {
    private final AnswerService answerService;

    @PostMapping("/submit/")
    public ResponseEntity<AnswerResponseDto> createAnswer(@Validated @RequestBody AnswerPostDto answerPostDto) {
        AnswerResponseDto createdAnswer = answerService.createAnswer(answerPostDto);
        return new ResponseEntity<>(createdAnswer, HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity<AnswerResponseDto> updateAnswer(@PathVariable("id") Long id,
                                                          @Validated @RequestBody AnswerPatchDto answerPatchDto) {
        AnswerResponseDto updatedAnswer = answerService.updateAnswer(id, answerPatchDto);
        return new ResponseEntity<>(updatedAnswer, HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity<AnswerResponseDto> getAnswer(@PathVariable("id") Long id) {
        AnswerResponseDto answer = answerService.getAnswer(id);
        return new ResponseEntity<>(answer, HttpStatus.OK);
    }

    @GetMapping("/{account-id}")
    public ResponseEntity<List<AnswerResponseDto>> getAllAnswers() {
        List<AnswerResponseDto> answers = answerService.getAllAnswers();
        return new ResponseEntity<>(answers, HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity<Void> deleteAnswer(@PathVariable("id") Long id) {
        answerService.deleteAnswer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
