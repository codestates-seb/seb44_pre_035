import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
// import { getTags } from "../../api/postAPI";

// 서버 닫혀 있을 경우에 사용할 dummy 데이터
const wholeTag = [
  { tagId: 1, tagName: "js", tagContent: "" },
  { tagId: 2, tagName: "java", tagContent: "" },
  { tagId: 3, tagName: "Python", tagContent: "" },
];

// eslint-disable-next-line no-unused-vars
export default function SubmitTag({ title, comment, question, setAsk }) {
  // eslint-disable-next-line no-unused-vars
  const [getTagList, setGetTagList] = useState([]);

  console.log("------getTagList", getTagList);

  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const [isHaveTagItem, setIsHaveTagItem] = useState(false);
  // 서버 열려있는 경우, wholeTag >> getTagList
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

  const handleDelete = (id) => {
    const deleteTag = tagList.filter((tag) => {
      return tag.tagId !== id;
    });
    setTagList(deleteTag);
  };

  // 서버 열려있는 경우, wholeTag >> getTagList
  const handleDropDownList = () => {
    if (tagItem === "") {
      setIsHaveTagItem(false);
      setDropDownList([]);
    } else {
      const IncludedTag = wholeTag.filter((tag) =>
        tag.tagName.includes(tagItem),
      );
      setDropDownList(IncludedTag);
    }
  };

  const handleClickDropDownTag = (e) => {
    setTagItem(e);
    setIsHaveTagItem(false);
  };

  // 서버 닫혀 있을 경우에 사용할 태그 Get 요청
  useEffect(() => {
    setGetTagList(wholeTag);
  }, []);

  // useEffect(() => {
  //   const response = async () => {
  //     try {
  //       await getTags();
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   setGetTagList(response.data);
  // }, []);

  useEffect(() => {
    if (tagList.length !== 0) {
      const filterTag = getTagList.filter((tag) => {
        return tag.tagName === tagList[tagList.length - 1];
      });

      const addTag = filterTag[0].tagId;

      setAsk((prev) => ({ ...prev, tags: [...prev.tags, { tagId: addTag }] }));
      setTagItem("");
    }
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
                  handleDelete(tag.tagId);
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
