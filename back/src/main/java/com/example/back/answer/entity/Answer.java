package com.example.back.answer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Answer")
public class Answer {
    @Id
    @Setter
    @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Answer_id")
    private Long id;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "Account_id")
//    private Account account;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "Question_id")
//    private Question question;

    @Column(name = "content", columnDefinition = "TEXT")
    private String content;

    public Answer(String content) {
        this.content = content;
    }

//    public Answer(Account account, Question question, String content) {
//        this.account = account;
//        this.question = question;
//        this.content = content;
//    }
}
