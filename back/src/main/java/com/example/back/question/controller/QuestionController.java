package com.example.back.question.controller;

import com.example.back.DTOs.MultiResponseDto;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.mapper.AnswerMapper;
import com.example.back.question.dto.*;
import com.example.back.question.entity.Question;
import com.example.back.question.mapper.QuestionMapper;
import com.example.back.question.service.QuestionServiceImpl;
import com.example.back.question.utils.UriCreator;
//import com.example.back.tag.Service.TagServiceImpl;
import com.example.back.tag.Service.TagServiceImpl;
import lombok.RequiredArgsConstructor;
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
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/questions")
@Validated
@Slf4j
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";
    private final QuestionServiceImpl questionService;
    private final TagServiceImpl tagService;
    private final QuestionMapper questionMapper;
    private final AnswerMapper answerMapper;

    @PostMapping("/ask")
    public ResponseEntity postQuestion(
            @Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto));
        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());

        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{question_id}")
    public ResponseEntity getQuestion(@PathVariable("question_id")
                                          @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        List<Answer> answerList = questionService.findQuestionAnswer(question);
        question.setAnswers(answerList.size());
        return new ResponseEntity<>(
                new QAResponseDto<>(questionMapper.questionToQuestionResponseDto(question),
                        answerMapper.answersToAnswerResponseDtos(answerList)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam(required = false, defaultValue = "1", value = "page") int page,
                                       @Positive @RequestParam(required = false, defaultValue = "5", value = "size") int size,
                                       @RequestParam(required = false, defaultValue = "modifiedAt", value = "criteria") String criteria,
                                       @RequestParam(required = false, defaultValue = "DESC", value = "sort") String sort){
        Page<Question> pageQuestions = questionService.findQuestions(page-1, size, criteria, sort);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionsResponseDtos(questions),
                        pageQuestions), HttpStatus.OK);
    }

    @GetMapping("/search/{keyword}")
    public ResponseEntity searchQuestions(@Positive @RequestParam(required = false, defaultValue = "1", value = "page") int page,
                                       @Positive @RequestParam(required = false, defaultValue = "5", value = "size") int size,
                                       @RequestParam(required = false, defaultValue = "modifiedAt", value = "criteria") String criteria,
                                       @RequestParam(required = false, defaultValue = "DESC", value = "sort") String sort,
                                       @PathVariable("keyword") String keyword){
        Page<Question> pageQuestions = questionService.searchQuestions(page-1, size, criteria, sort, keyword);
        List<Question> questions = pageQuestions.getContent().stream().map(Q -> {
            Q.setAnswers(Q.getAnswerList().size());
            return Q;
        }).collect(Collectors.toList());

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionsResponseDtos(questions),
                        pageQuestions), HttpStatus.OK);
    }

    @GetMapping("/search/isAnswered/{YorN}")
    public ResponseEntity searchAnsweredQuestions(@Positive @RequestParam(required = false, defaultValue = "1", value = "page") int page,
                                          @Positive @RequestParam(required = false, defaultValue = "5", value = "size") int size,
                                          @RequestParam(required = false, defaultValue = "modifiedAt", value = "criteria") String criteria,
                                          @RequestParam(required = false, defaultValue = "DESC", value = "sort") String sort,
                                          @PathVariable("YorN") String YorN){
        Page<Question> pageQuestions = questionService.searchAnsweredQuestions(page-1, size, criteria, sort, YorN);
        List<Question> questions = pageQuestions.getContent().stream().map(Q -> {
            Q.setAnswers(Q.getAnswerList().size());
            return Q;
        }).collect(Collectors.toList());

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionsResponseDtos(questions),
                        pageQuestions), HttpStatus.OK);
    }


    @GetMapping("/ask")
    public ResponseEntity getTags(){
        return new ResponseEntity<>(questionMapper.tagsToTagResponseDtos(tagService.getTags())
                , HttpStatus.OK);
    }

    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id")
                                         @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/{question_id}")
    public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        Question question = questionService.updateQuestion(questionId, questionMapper.questionPatchDtoToQuestion(questionPatchDto));
        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());

        return ResponseEntity.created(location).build();
    }

/*

*/


}
