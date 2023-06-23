package com.example.back.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentPatchDto {
    private long commentId;
    @NotBlank(message = "빈내용 ㄴ")
    private String content;

}
