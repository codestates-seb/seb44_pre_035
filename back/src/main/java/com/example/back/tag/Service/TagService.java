package com.example.back.tag.Service;

import com.example.back.question.entity.Question;
import com.example.back.tag.entity.Tag;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TagService {
    List<Tag> getTags();

    Tag postTag(Tag tag);
}
