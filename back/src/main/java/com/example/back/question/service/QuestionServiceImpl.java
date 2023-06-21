package com.example.back.question.service;


import com.example.back.account.entity.Account;
import com.example.back.account.repository.AccountRepository;
import com.example.back.account.util.SecurityUtil;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.repository.AnswerRepository;
import com.example.back.question.entity.Question;
import com.example.back.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@RequiredArgsConstructor
@Service
public class QuestionServiceImpl implements QuestionService{
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final AccountRepository accountRepository;

    @Override
    public Question createQuestion(Question question){
         //String userEmail = SecurityUtil.getLoginUsername();
         //Account account = accountRepository.findByEmail(userEmail).orElseThrow();
         //question.setAccount(account);
        question.setViews(0);

        return questionRepository.save(question);
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
    public void deleteQuestion(Long questionId){
        questionRepository.delete(findQuestion(questionId));
    }

    @Override
    public Question updateQuestion(Question question) {
        Question foundQuestion = findQuestion(question.getQuestionId());
        foundQuestion.setTitle(question.getTitle());
        foundQuestion.setContent(question.getContent());
        foundQuestion.setModifiedAt(question.getModifiedAt());

        questionRepository.save(foundQuestion);
        return foundQuestion;
    }

}
