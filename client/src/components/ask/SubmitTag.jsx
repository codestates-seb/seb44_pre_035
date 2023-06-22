import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const wholeTag = ["css", "javaScript", "java", "react"];

export default function SubmitTag({
  title,
  comment,
  htmlFor,
  placeholder,
  name,
  question,
}) {
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const [isHaveTagItem, setIsHaveTagItem] = useState(false);
  const [dropDownList, setDropDownList] = useState(wholeTag);

  console.log("tagItem", tagItem);
  console.log("tagList", tagList);
  console.log("isHaveTagItem", isHaveTagItem);
  console.log("dropDownList", dropDownList);

  const handleChange = (e) => {
    setTagItem(e.target.value);
    setIsHaveTagItem(true);
  };

  const onKeyUp = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      setTagList((prev) => [...prev, tagItem]);
    }
  };

  // const handleDelete = (id) => {
  //   setTagList(tagList.filter((tag) => tag.id !== id));
  // };

  const handleDropDownList = () => {
    if (tagItem === "") {
      setIsHaveTagItem(false);
      setDropDownList([]);
    } else {
      const IncludedTag = wholeTag.filter((tag) => tag.includes(tagItem));
      setDropDownList(IncludedTag);
    }
  };

  const handleClickDropDownTag = (e) => {
    setTagItem(e);
    setIsHaveTagItem(false);
  };

  useEffect(() => {
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
              <Button>X</Button>
            </TagItem>
          );
        })}
      </TagsWrapper>
      <Wrapper SubmitInput="true" direction="column">
        <InputTitle text="title" htmlFor={htmlFor}>
          {title}
        </InputTitle>
        <InputTitle text="sub" htmlFor={htmlFor}>
          {comment}
        </InputTitle>
        <Input
          id={htmlFor}
          placeholder={placeholder}
          name={name}
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
            {dropDownList.map((dropDownItem, idex) => {
              return (
                <DropDownItem
                  key={idex}
                  onClick={() => {
                    handleClickDropDownTag(dropDownItem);
                  }}
                >
                  {dropDownItem}
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
