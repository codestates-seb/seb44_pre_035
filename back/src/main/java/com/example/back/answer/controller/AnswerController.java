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
@RequestMapping()
public class AnswerController {
    private final AnswerService answerService;

    @PostMapping("questions/{question-id}/answers/submit")
    public ResponseEntity<AnswerResponseDto> createAnswer(@PathVariable("question-id") Long questionId,
            @Validated @RequestBody AnswerPostDto answerPostDto) {
        /**/
        AnswerResponseDto createdAnswer = answerService.createAnswer(questionId, answerPostDto);
        return new ResponseEntity<>(createdAnswer, HttpStatus.CREATED);
    }

    @PatchMapping("questions/{question-id}/answers/{answer-id}")
    public ResponseEntity<AnswerResponseDto> updateAnswer(@PathVariable("answer-id") Long id,
                                                          @Validated @RequestBody AnswerPatchDto answerPatchDto) {
        AnswerResponseDto updatedAnswer = answerService.updateAnswer(id, answerPatchDto);
        return new ResponseEntity<>(updatedAnswer, HttpStatus.OK);
    }
    /*
    @GetMapping("answers/{answer-id}")
    public ResponseEntity<AnswerResponseDto> getAnswer(@PathVariable("answer-id") Long id) {
        AnswerResponseDto answer = answerService.getAnswer(id);
        return new ResponseEntity<>(answer, HttpStatus.OK);
    }
    */
    /*
    @GetMapping("answers/{account-id}")
    public ResponseEntity<List<AnswerResponseDto>> getAllAnswers() {
        List<AnswerResponseDto> answers = answerService.getAllAnswers();
        return new ResponseEntity<>(answers, HttpStatus.OK);
    }
    */

    @DeleteMapping("answers/{answer-id}")
    public ResponseEntity<Void> deleteAnswer(@PathVariable("answer-id") Long id) {
        answerService.deleteAnswer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
