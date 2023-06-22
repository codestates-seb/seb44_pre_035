package com.example.back.tag.mapper;

import com.example.back.tag.dto.TagPostDto;
import com.example.back.tag.dto.TagResponseDto;
import com.example.back.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {

    List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags);

    // for test
    Tag tagPostDtoToTag(TagPostDto tagPostDto);
    TagResponseDto tagToTagResponseDto(Tag tag);

}
