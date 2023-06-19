package com.example.back.question.service;


import com.example.back.question.entity.Question;
import com.example.back.question.mapper.QuestionMapperImpl;
import com.example.back.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    public Question findQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        return optionalQuestion.orElseThrow(NullPointerException::new);
    }

    public Page<Question> findQuestions(int page, int size, String criteria, String sort){
        Pageable pageable = (sort.equals("ASC")) ?
                PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, criteria))
                : PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, criteria));
        return questionRepository.findAll(pageable);
    }

    public void deleteQuestion(long questionId){
        questionRepository.delete(findQuestion(questionId));
    }

    private Question saveQuestion(Question question){
        return questionRepository.save(question);
    }

    public void updateQuestion(Question question){
        Question foundQuestion = findQuestion(question.getQuestionId());
        foundQuestion.setTitle(question.getTitle());
        foundQuestion.setContent(question.getContent());
        foundQuestion.setModifiedAt(question.getModifiedAt());

        questionRepository.save(foundQuestion);
    }
}
