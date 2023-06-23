package com.example.back.question.service;


import com.example.back.account.entity.Account;
import com.example.back.account.repository.AccountRepository;
import com.example.back.account.util.SecurityUtil;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.repository.AnswerRepository;
import com.example.back.question.entity.Question;
import com.example.back.question.entity.QuestionTag;
import com.example.back.question.repository.QuestionRepository;
//import com.example.back.tag.Service.TagServiceImpl;
import com.example.back.question.repository.QuestionTagRepository;
import com.example.back.tag.Service.TagServiceImpl;
import com.example.back.tag.entity.Tag;
import com.example.back.tag.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Transactional
@RequiredArgsConstructor
@Service
public class QuestionServiceImpl implements QuestionService{
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final TagRepository tagRepository;
    private final QuestionTagRepository questionTagRepository;
    private final TagServiceImpl tagService;

    @Override
    public Question createQuestion(Question question){

        //String userEmail = SecurityUtil.getLoginUsername();
        //Account account = accountRepository.findByEmail(userEmail).orElseThrow();
        //question.setAccount(account);
        Question savedquestion = questionRepository.save(question);

        return savedquestion;
    }

    @Override
    public Question findQuestion(long questionId) {
        Question question = questionRepository.findById(questionId).orElseThrow(NullPointerException::new);
        question.setViews(question.getViews()+1);

        return question;
    }

    @Override
    public List<Answer> findQuestionAnswer(Question question){
        return answerRepository.findAllByQuestion(question);
    }

    @Override
    public Page<Question> findQuestions(int page, int size, String criteria, String sort){
        Pageable pageable = (sort.equals("ASC")) ?
                PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, criteria))
                : PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, criteria));
        return questionRepository.findAll(pageable);
    }

    @Override
    public Page<Question> searchQuestions(int page, int size, String criteria, String sort, String keyword){
        Pageable pageable = (sort.equals("ASC")) ?
                PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, criteria))
                : PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, criteria));
        return questionRepository.findByTitleContainingOrContentContaining(keyword, keyword, pageable);
    }

    @Override
    public Page<Question> searchAnsweredQuestions(int page, int size, String criteria, String sort, String YorN){
        Pageable pageable = (sort.equals("ASC")) ?
                PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, criteria))
                : PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, criteria));
        return (YorN.equals("N")) ?
                questionRepository.findByAnswersEquals(0, pageable)
                : questionRepository.findByAnswersGreaterThan(0, pageable);
    }

    @Override
    public void deleteQuestion(Long questionId){
        questionRepository.delete(findQuestion(questionId));
    }



    @Override
    public Question updateQuestion(Long questionId, Question question) {
        Question foundQuestion = questionRepository.findById(questionId).orElseThrow();

        foundQuestion.setTitle(question.getTitle());
        foundQuestion.setContent(question.getContent());

        //foundQuestion.resetQuestionTags();
        List<QuestionTag> questionTags = (question.getQuestionTags().stream()
                .map(questionTag ->{
                    Tag tag = tagRepository.findById(questionTag.getPatchTagId());
                    tag.resetQuestionTags();
                    return QuestionTag.builder()
                            .tag(tag)
                            .question(foundQuestion)
                            .build();
                }).collect(Collectors.toList()));
        foundQuestion.setQuestionTags(questionTags);

        questionRepository.save(foundQuestion);
        return foundQuestion;
    }

}
