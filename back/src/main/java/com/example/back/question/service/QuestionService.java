package com.example.back.question.service;


import com.example.back.question.entity.Question;
import com.example.back.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository){
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question){
        Question savedQuestion = saveQuestion(question);

        return savedQuestion;
    }

    /*
    구현을 고려해야 할 부분
    조회수 계산
    조회수 업데이트
     */
    public Question findQuestion(long questionId) {return findQuestion(questionId);}

    public Page<Question> findQuestions(int page, int size){
        return questionRepository.findAll(PageRequest.of(page,size,
                Sort.by("createdDate").descending()));
    }

    public void deleteQuestion(long questionId){
        Question findQuestion = findQuestion(questionId);

    }

    private Question saveQuestion(Question question){
        return questionRepository.save(question);
    }
}
