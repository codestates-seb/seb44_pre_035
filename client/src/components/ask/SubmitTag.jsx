import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { getTags } from "../../api/postAPI";

export default function SubmitTag({ title, comment, question, setAsk }) {
  const [getTagList, setGetTagList] = useState([]);

  // console.log("------getTagList", getTagList);

  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const [isHaveTagItem, setIsHaveTagItem] = useState(false);
  // 서버 열려있는 경우, wholeTag >> getTagList
  const [dropDownList, setDropDownList] = useState(getTags);

  // console.log("tagItem", tagItem);
  // console.log("tagList", tagList);
  // console.log("isHaveTagItem", isHaveTagItem);
  // console.log("dropDownList", dropDownList);

  const handleChange = (e) => {
    setTagItem(e.target.value);
    setIsHaveTagItem(true);
  };

  const onKeyUp = (e) => {
    if (
      e.target.value.length !== 0 &&
      e.key === "Enter" &&
      tagList.includes(e.target.value) === false
    ) {
      setTagList((prev) => [...prev, tagItem]);
    }

    if (
      e.target.value.length !== 0 &&
      e.key === "Enter" &&
      tagList.includes(e.target.value) === true
    ) {
      alert("이미 추가된 태그입니다.");
      setTagItem("");
    }
  };

  const handleDelete = (tag) => {
    const deleteTag = tagList.filter((item) => {
      return item !== tag;
    });

    setTagList(deleteTag);
  };

  const handleDropDownList = () => {
    if (tagItem === "") {
      setIsHaveTagItem(false);
      setDropDownList([]);
    } else {
      const IncludedTag = getTagList.filter((tag) =>
        tag.tagName.includes(tagItem),
      );
      setDropDownList(IncludedTag);
    }
  };

  const handleClickDropDownTag = (e) => {
    setTagItem(e);
    setIsHaveTagItem(false);
  };

  useEffect(() => {
    getTags().then((res) => {
      setGetTagList(res.data);
    });
  }, []);

  useEffect(() => {
    const arr = new Array();

    if (tagList.length !== 0) {
      for (let tag of getTagList) {
        for (let tagName of tagList) {
          if (tag.tagName === tagName) {
            arr.push({ questionTags: tag.tagId });
            // console.log("arr", arr);
          }
        }
      }
      setAsk((prev) => ({ ...prev, tags: [arr] }));
    }

    if (tagList.length === 0) {
      setAsk((prev) => ({ ...prev, tags: [] }));
    }

    setTagItem("");
  }, [tagList]);

  useEffect(handleDropDownList, [tagItem]);

  return (
    <>
      <TagsWrapper>
        {tagList.map((tag, index) => {
          return (
            <TagItem key={index}>
              <Text>{tag}</Text>
              <Button
                onClick={() => {
                  handleDelete(tag);
                }}
              >
                X
              </Button>
            </TagItem>
          );
        })}
      </TagsWrapper>
      <Wrapper>
        <InputTitle text="title">{title}</InputTitle>
        <InputTitle text="sub">{comment}</InputTitle>
        <Input
          value={tagItem}
          onChange={handleChange}
          onKeyUp={onKeyUp}
          defaultValue={question}
        />
        {isHaveTagItem && (
          <Wrapper>
            {dropDownList.length === 0 && (
              <DropDownItem>No corresponding tags found</DropDownItem>
            )}
            {dropDownList.map((dropDownItem) => {
              return (
                <DropDownItem
                  key={dropDownItem.tagId}
                  onClick={() => {
                    handleClickDropDownTag(dropDownItem.tagName);
                  }}
                >
                  {dropDownItem.tagName}
                </DropDownItem>
              );
            })}
          </Wrapper>
        )}
      </Wrapper>
    </>
  );
}

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;

  border: 1px solid #d1d1d1;
  border-radius: 3px;
  padding: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 1px solid #d1d1d1;
  border-radius: 3px;
  padding: 24px;
`;

const InputTitle = styled.label`
  /* border: 1px solid red; */

  ${(props) =>
    props.text === "title" &&
    css`
      font-size: 15px;
      font-weight: 600;
    `}

  ${(props) =>
    props.text === "sub" &&
    css`
      font-size: 12px;
      font-weight: 400;
    `}
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 5px;
  background-color: #cecece;
  border-radius: 3px;
  font-size: 13px;
`;

const Text = styled.span`
  color: white;
`;

const Button = styled.button`
  background-color: white;

  width: 15px;
  border-radius: 3px;
  color: gray;
`;

const Input = styled.input`
  border: 1px solid#969696;
  border-radius: 3px;
`;

const DropDownItem = styled.div`
  border: 1px solid #969696;
  border-radius: 3px;

  padding: 2px;

  :hover {
    background-color: gray;
  }
`;
