package com.example.back.question.entity;

import com.example.back.question.audit.BaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
@Entity(name = "QUESTIONS")
@EnableJpaAuditing
public class Question extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String content; // String 말고 본문 전체를 커버할 수 있는 거 만들기.

    /*
    답변
    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();
    * */
    @Builder
    public Question(String title, String content){
        this.title = title;
        this.content = content;
    }

    @Builder
    public Question(long questionId, String title, String content){
        this.questionId = questionId;
        this.title = title;
        this.content = content;
    }


    //
}
