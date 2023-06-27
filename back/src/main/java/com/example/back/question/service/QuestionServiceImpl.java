package com.example.back.question.service;


import com.example.back.account.repository.AccountRepository;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.repository.AnswerRepository;
import com.example.back.question.entity.Question;
import com.example.back.question.entity.QuestionTag;
import com.example.back.question.repository.QuestionRepository;
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
public class QuestionServiceImpl implements QuestionService {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final TagRepository tagRepository;
    private final AccountRepository accountRepository;

    @Override
    public Question createQuestion(Question question) {
        //String userEmail = SecurityUtil.getLoginUsername();
        //Account account = accountRepository.findByEmail(userEmail).orElseThrow();
        //question.setAccount(account);

        return questionRepository.save(question);
    }

    @Override
    public Question findQuestion(long questionId) {
        Question question = questionRepository.findById(questionId).orElseThrow(NullPointerException::new);
        question.setViews(question.getViews() + 1);

        return question;
    }

    @Override
    public List<Answer> findQuestionAnswer(Question question) {
        return answerRepository.findAllByQuestion(question);
    }

    @Override
    public Page<Question> findQuestions(int page, int size, String criteria, String sort) {
        Pageable pageable = (sort.equals("ASC")) ?
                PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, criteria))
                : PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, criteria));
        return questionRepository.findAll(pageable);
    }

    @Override
    public Page<Question> findAnsweredQuestions(int page, int size, String criteria, String sort, String YorN) {
        Pageable pageable = (sort.equals("ASC")) ?
                PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, criteria))
                : PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, criteria));
        return (YorN.equals("N")) ? questionRepository.findByAnswersLessThan(1, pageable)
                : questionRepository.findByAnswersGreaterThan(0, pageable);
    }


    @Override
    public Page<Question> searchQuestions(int page, int size, String criteria, String sort, String keyword) {
        Pageable pageable = (sort.equals("ASC")) ?
                PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, criteria))
                : PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, criteria));
        return questionRepository.findByTitleContainingOrContentContaining(keyword, keyword, pageable);
    }

    @Override
    public Page<Question> searchAnsweredQuestions(int page, int size, String criteria, String sort, String keyword, String YorN) {
        Pageable pageable = (sort.equals("ASC")) ?
                PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, criteria))
                : PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, criteria));
        return (YorN.equals("N")) ?
                questionRepository.findByAnswersLessThanAndTitleContainingOrContentContaining(1, keyword, keyword, pageable)
                : questionRepository.findByAnswersGreaterThanAndTitleContainingOrContentContaining(0, keyword, keyword, pageable);
    }

    @Override
    public void deleteQuestion(Long questionId) {
        Question question = questionRepository.findById(questionId).orElse(null);
        if (question != null) {
            /*
            String loggedInUserEmail = SecurityUtil.getLoginUsername();
            if (question.getAccount().getEmail().equals(loggedInUserEmail)) {

            } else throw new AccessDeniedException("본인이 작성한 질문만 삭제 가능합니다.");
        } else {
            throw new NoSuchElementException("해당 id 값으로 조회되는 질문이 존재하지 않습니다." + questionId);
        }

             */
            questionRepository.deleteById(questionId);}
    }

    @Override
    public Question updateQuestion(Long questionId, Question question) {
        Question foundQuestion = questionRepository.findById(questionId).orElseThrow();
        if (question != null) {
            //String loggedInUserEmail = SecurityUtil.getLoginUsername();
            foundQuestion.setTitle(question.getTitle());
            foundQuestion.setContent(question.getContent());

            /*
            if (question.getAccount().getEmail().equals(loggedInUserEmail)) {
                foundQuestion.setTitle(question.getTitle());
                foundQuestion.setContent(question.getContent());

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
            } else throw new AccessDeniedException("본인이 작성한 질문만 수정 가능합니다.");
        } else {
            throw new NoSuchElementException("해당 id 값으로 조회되는 질문이 존재하지 않습니다." + questionId);
        }


             */

            List<QuestionTag> questionTags = (question.getQuestionTags().stream()
                    .map(questionTag -> {
                        Tag tag = tagRepository.findById(questionTag.getPatchTagId());
                        tag.resetQuestionTags();
                        return QuestionTag.builder()
                                .tag(tag)
                                .question(foundQuestion)
                                .build();
                    }).collect(Collectors.toList()));
            foundQuestion.setQuestionTags(questionTags);

            questionRepository.save(foundQuestion);


        }
        return foundQuestion;
    }
}
