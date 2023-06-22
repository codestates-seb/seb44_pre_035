package com.example.back.tag.Service;

import com.example.back.question.entity.Question;
import com.example.back.tag.entity.Tag;
import com.example.back.tag.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@RequiredArgsConstructor
@Service
public class TagServiceImpl implements TagService{

    private final TagRepository tagRepository;

    @Override
    public List<Tag> getTags(){
        return tagRepository.findAll();
    };

    // for test
    @Override
    public Tag postTag(Tag tag){
        return tagRepository.save(tag);
    };

}
