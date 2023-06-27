package com.example.back.question.controller;

import com.example.back.DTOs.MultiResponseDto;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.mapper.AnswerMapper;
import com.example.back.answer.repository.AnswerRepository;
import com.example.back.comment.dto.CommentResponseDto;
import com.example.back.comment.entity.Comment;
import com.example.back.comment.mapper.CommentMapper;
import com.example.back.comment.repository.CommentRepository;
import com.example.back.question.dto.*;
import com.example.back.question.entity.Question;
import com.example.back.question.mapper.QuestionMapper;
import com.example.back.question.repository.QuestionRepository;
import com.example.back.question.service.QuestionServiceImpl;
import com.example.back.question.utils.UriCreator;
import com.example.back.tag.Service.TagServiceImpl;
import com.example.back.tag.mapper.TagMapper;
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
    private final CommentMapper commentMapper;
    private final TagMapper tagMapper;
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final CommentRepository commentRepository;

    @PostMapping("/ask")
    public ResponseEntity postQuestion(
            @Valid @RequestBody QuestionPostDto questionPostDto){
        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto));
        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());

        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{question_id}")
    public ResponseEntity getQuestion(@PathVariable("question_id")
                                          @Positive long questionId){
        Question question = questionService.findQuestion(questionId);
        List<Answer> answerList = questionService.findQuestionAnswer(question);
        //Question
        QuestionResponseDto questionResponseDto = questionMapper.questionToQuestionResponseDto(question);
        //Account questionAccount = question.getAccount();
        //questionResponseDto.setAccount(questionAccount);
        List<AnswerResponseDto> answerResponseDtos = answerMapper.answersToAnswerResponseDtos(answerList);
        for (AnswerResponseDto answerResponseDto : answerResponseDtos) {
            Answer answer = answerRepository.findById(answerResponseDto.getAnswerId()).orElseThrow();
            //Account answerAccount = answer.getAccount();
            //answerResponseDto.setAccount(answerAccount);
            answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());

            List<Comment> commentList = commentRepository.findAllByAnswer(answer);
            List<CommentResponseDto> commentResponseDtos = commentMapper.commentsToCommentResponseDtos(commentList);
            for (CommentResponseDto commentResponseDto : commentResponseDtos){
                Comment comment = commentRepository.findById(commentResponseDto.getCommentId()).orElseThrow();
                //Account commentAccount = comment.getAccount();
                //commentResponseDto.setAccountId(commentAccount.getId());
                commentResponseDto.setAnswerId(comment.getAnswer().getAnswerId());
            }

            answerResponseDto.setCommentList(commentResponseDtos);
        }

        return new ResponseEntity<>(
                new QAResponseDto<>(questionResponseDto, answerResponseDtos),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam(required = false, defaultValue = "1", value = "page") int page,
                                       @Positive @RequestParam(required = false, defaultValue = "5", value = "size") int size,
                                       @RequestParam(required = false, defaultValue = "modifiedAt", value = "criteria") String criteria,
                                       @RequestParam(required = false, defaultValue = "DESC", value = "sort") String sort){
        Page<Question> pageQuestions = questionService.findQuestions(page-1, size, criteria, sort);
        List<Question> questions = pageQuestions.getContent();

        List<QuestionResponseDto> questionResponseDtos = questionMapper.questionsToQuestionsResponseDtos(questions);
        for (QuestionResponseDto questionResponseDto : questionResponseDtos) {
            Question question = questionRepository.findById(questionResponseDto.getQuestionId()).orElseThrow();
            //Account account = question.getAccount();
            //questionResponseDto.setAccount(account);
        }


        return new ResponseEntity<>(
                new MultiResponseDto<>(questionResponseDtos, pageQuestions), HttpStatus.OK);
    }

    @GetMapping("/isAnswered/{YorN}")
    public ResponseEntity getAnsweredQuestions(@Positive @RequestParam(required = false, defaultValue = "1", value = "page") int page,
                                               @Positive @RequestParam(required = false, defaultValue = "5", value = "size") int size,
                                               @RequestParam(required = false, defaultValue = "modifiedAt", value = "criteria") String criteria,
                                               @RequestParam(required = false, defaultValue = "DESC", value = "sort") String sort,
                                               @PathVariable("YorN") String YorN){
        Page<Question> pageQuestions = questionService.findAnsweredQuestions(page-1, size, criteria, sort, YorN);
        List<Question> questions = pageQuestions.getContent();

        List<QuestionResponseDto> questionResponseDtos = questionMapper.questionsToQuestionsResponseDtos(questions);
        for (QuestionResponseDto questionResponseDto : questionResponseDtos) {
            Question question = questionRepository.findById(questionResponseDto.getQuestionId()).orElseThrow();
            //Account account = question.getAccount();
            //questionResponseDto.setAccount(account);
        }

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionResponseDtos, pageQuestions), HttpStatus.OK);
    }

    @GetMapping("/search/{keyword}")
    public ResponseEntity searchAnsweredQuestions(@Positive @RequestParam(required = false, defaultValue = "1", value = "page") int page,
                                                  @Positive @RequestParam(required = false, defaultValue = "5", value = "size") int size,
                                                  @RequestParam(required = false, defaultValue = "modifiedAt", value = "criteria") String criteria,
                                                  @RequestParam(required = false, defaultValue = "DESC", value = "sort") String sort,
                                                  @PathVariable("keyword") String keyword){
        Page<Question> pageQuestions = questionService.searchQuestions(page-1, size, criteria, sort, keyword);
        List<Question> questions = pageQuestions.getContent();

        List<QuestionResponseDto> questionResponseDtos = questionMapper.questionsToQuestionsResponseDtos(questions);
        for (QuestionResponseDto questionResponseDto : questionResponseDtos) {
            Question question = questionRepository.findById(questionResponseDto.getQuestionId()).orElseThrow();
            //Account account = question.getAccount();
            //questionResponseDto.setAccount(account);
        }

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionResponseDtos, pageQuestions), HttpStatus.OK);
    }

    @GetMapping("/search/{keyword}/isAnswered/{YorN}")
    public ResponseEntity searchAnsweredQuestions(@Positive @RequestParam(required = false, defaultValue = "1", value = "page") int page,
                                          @Positive @RequestParam(required = false, defaultValue = "5", value = "size") int size,
                                          @RequestParam(required = false, defaultValue = "modifiedAt", value = "criteria") String criteria,
                                          @RequestParam(required = false, defaultValue = "DESC", value = "sort") String sort,
                                          @PathVariable("keyword") String keyword,
                                          @PathVariable("YorN") String YorN){
        Page<Question> pageQuestions = questionService.searchQuestions(page-1, size, criteria, sort, keyword);
        List<Question> questions = pageQuestions.getContent();

        List<Question> answeredQuestions = (YorN.equals("N")) ?
                questions.stream().filter(Question -> Question.getAnswers() == 0).collect(Collectors.toList())
                : questions.stream().filter(Question -> Question.getAnswers() != 0).collect(Collectors.toList());

        List<QuestionResponseDto> questionResponseDtos = questionMapper.questionsToQuestionsResponseDtos(answeredQuestions);
        for (QuestionResponseDto questionResponseDto : questionResponseDtos) {
            Question question = questionRepository.findById(questionResponseDto.getQuestionId()).orElseThrow();
            //Account account = question.getAccount();
            //questionResponseDto.setAccount(account);
        }

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionResponseDtos, pageQuestions), HttpStatus.OK);
    }

    @GetMapping("/ask")
    public ResponseEntity getTags(){
        return new ResponseEntity<>(tagMapper.tagsToTagResponseDtos(tagService.getTags())
                , HttpStatus.OK);
    }

    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id")
                                         @Positive long questionId) throws Exception {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/{question_id}")
    public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) throws Exception {
        Question question = questionService.updateQuestion(questionId, questionMapper.questionPatchDtoToQuestion(questionPatchDto));
        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());

        return ResponseEntity.created(location).build();
    }
}
