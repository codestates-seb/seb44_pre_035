package com.example.back.tag.controller;


import com.example.back.DTOs.SingleResponseDto;
import com.example.back.question.dto.QuestionPostDto;
import com.example.back.tag.Service.TagServiceImpl;
import com.example.back.tag.dto.TagPostDto;
import com.example.back.tag.entity.Tag;
import com.example.back.tag.mapper.TagMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tag")
@Validated
public class TagController {
    private final TagMapper tagMapper;
    private final TagServiceImpl tagService;

    // for test
    @PostMapping("/ask")
    public ResponseEntity postTag(@RequestBody TagPostDto tagPostDto){
        return new ResponseEntity<>(tagMapper.tagToTagResponseDto(tagService.postTag(tagMapper.tagPostDtoToTag(tagPostDto))), HttpStatus.OK);
    }

}