package com.example.back.comment.mapper;

import com.example.back.comment.dto.CommentPatchDto;
import com.example.back.comment.dto.CommentPostDto;
import com.example.back.comment.dto.CommentResponseDto;
import com.example.back.comment.entity.Comment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostDtoToComment(CommentPostDto commentPostDto);
    Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto);
    CommentResponseDto commentToCommentResponseDto(Comment comment);
    List<CommentResponseDto> commentsToCommentResponseDtos(List<Comment> comments);
}
