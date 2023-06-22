package com.example.back.tag.dto;

import com.example.back.question.validator.NotSpace;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class TagPostDto {

    @NotSpace(message = "tag 이름은 비어있을 수 없습니다.")
    private String tagName;

    private String tagContent;
}
