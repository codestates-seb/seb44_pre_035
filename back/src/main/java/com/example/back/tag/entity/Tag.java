package com.example.back.tag.entity;

import com.example.back.question.entity.QuestionTag;
import lombok.*;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EnableJpaAuditing
@Getter
@Setter
@Entity(name = "TAG")
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(nullable = false)
    private String tagName;

    @Column(nullable = false)
    private String tagContent;

    @OneToMany(mappedBy = "tag", cascade = {CascadeType.PERSIST})
    private List<QuestionTag> questionTags = new ArrayList<>();

    public void addQuestionTag(QuestionTag questionTag){
        this.questionTags.add(questionTag);
        if(questionTag.getTag() != this){
            questionTag.addTag(this);
        }
    }

    public void resetQuestionTags(){
        this.questionTags = new ArrayList<>();
    }
}
