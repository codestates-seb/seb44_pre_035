package com.example.back.question.entity;

import com.example.back.question.audit.BaseEntity;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.*;

@Getter
@EntityListeners(AuditingEntityListener.class)
@Entity
@EnableJpaAuditing
public class Question extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    /*
    답변
    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();
    * */

    public Question(String title, String content){
        this.title = title;
        this.content = content;
    }
    //
}
