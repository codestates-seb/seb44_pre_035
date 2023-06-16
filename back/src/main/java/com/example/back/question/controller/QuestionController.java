package com.example.back.question.controller;

import com.example.back.question.dto.MultiResponseDto;
import com.example.back.question.dto.QuestionPatchDto;
import com.example.back.question.dto.QuestionPostDto;
import com.example.back.question.dto.SingleResponseDto;
import com.example.back.question.entity.Question;
import com.example.back.question.mapper.QuestionMapper;
import com.example.back.question.service.QuestionService;
import com.example.back.question.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping()
@Validated
@Slf4j
public class QuestionController {
    private final static String ORDER_DEFAULT_URL = "";
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService,
                              QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
        // this.accountService = accountService;
    }

    // Account
    //private final AccountService accountService;
    @PostMapping
    public ResponseEntity postQuestion(
            @Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        URI location = UriCreator.createUri(ORDER_DEFAULT_URL, question.getQuestionId());

        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{question_id}")
    public ResponseEntity getQuestion(@PathVariable("question_id")
                                          @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                        @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions),
                        pageQuestions), HttpStatus.OK);
    }

    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id")
                                         @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /*
    @PatchMapping("/{question_id}")
    public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto){
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));

        return new ResponseEntity<>(
                new
        )


     */
}
/*


    @DeleteMapping
        public ResponseEntity get(){
        return new ResponseEntity<>();
    {

    @DeleteMapping
        public ResponseEntity get(){
        return new ResponseEntity<>();
    {*/

