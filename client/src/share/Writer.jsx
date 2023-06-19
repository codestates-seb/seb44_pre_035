import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

function Writer() {
  const [value, setValue] = useState("");
  const toolbarOptions = [
    ["bold", "italic"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: 1 }, { header: 2 }],
  ];

  const module = { toolbar: toolbarOptions };

  return (
    <ReactQuillStyle
      modules={module}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
}

const ReactQuillStyle = styled(ReactQuill)`
  & .ql-editor {
    height: 250px;
  }
`;

export default Writer;
