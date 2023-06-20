package com.example.back.question.service;


import com.example.back.account.repository.AccountRepository;
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

@Transactional
@RequiredArgsConstructor
@Service
public class QuestionServiceImpl implements QuestionService{
    private final AccountRepository accountRepository;
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;

    @Override
    public Question createQuestion(Question question){

        return questionRepository.save(question);
    }

    @Override
    public Question findQuestion(Long questionId) {
        Question question = questionRepository.findById(questionId).orElseThrow(NullPointerException::new);
        question.setAnswerList(answerRepository.findAllByQuestion(questionId));

        return question;
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
    public Question updateQuestion(Question question){
        Question foundQuestion = findQuestion(question.getQuestionId());
        foundQuestion.setTitle(question.getTitle());
        foundQuestion.setContent(question.getContent());
        foundQuestion.setModifiedAt(question.getModifiedAt());

        questionRepository.save(foundQuestion);
        return foundQuestion;
    }
}