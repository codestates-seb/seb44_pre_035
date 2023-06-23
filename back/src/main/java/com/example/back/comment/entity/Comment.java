package com.example.back.comment.entity;

import com.example.back.account.entity.Account;
import com.example.back.answer.entity.Answer;
import com.example.back.comment.audit.BaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "comment")
public class Comment extends BaseEntity {

    @Id
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id", nullable = false)
    private Long commentId;

    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id", nullable = false, insertable = false, updatable = false)
    private Long answerId;




    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "answer_id")
    private Answer answer;

    @Column(name = "content", columnDefinition = "TEXT", nullable = false)
    private String content;

    @Builder
    public Comment(long commentId, String content) {
        this.commentId = commentId;
        this.content = content;
    }

}
