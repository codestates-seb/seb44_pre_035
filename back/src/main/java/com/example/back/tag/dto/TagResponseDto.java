package com.example.back.tag.dto;

import lombok.Builder;
import lombok.Getter;


// for test
@Getter
public class TagResponseDto {

    private Long tagId;

    private String tagName;

    private String tagContent;

    @Builder
    public TagResponseDto(Long tagId, String tagName, String tagContent){
        this.tagId = tagId;
        this.tagName = tagName;
        this.tagContent = tagContent;
    }
}
