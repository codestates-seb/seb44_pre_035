package com.example.back.question.entity;

import com.example.back.question.audit.BaseEntity;
import com.example.back.tag.entity.Tag;
import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class QuestionTag extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    private long patchTagId;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;

    public void addQuestion(Question question){
        this.question = question;
        if (!this.question.getQuestionTags().contains(this)){
            this.question.getQuestionTags().add(this);
        }
    }
    public void addTag(Tag tag){
        this.tag = tag;
        if (!this.tag.getQuestionTags().contains(this)){
            this.tag.addQuestionTag(this);
        }
    }
}
