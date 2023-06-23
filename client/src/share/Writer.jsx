import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

function Writer({ name, setBody, question }) {
  const [value, setValue] = useState("");
  const toolbarOptions = [
    ["bold", "italic"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: 1 }, { header: 2 }],
  ];

  const module = { toolbar: toolbarOptions };

  useEffect(() => {
    setBody((prev) => ({ ...prev, [name]: value }));
  }, [value]);

  useEffect(() => {
    setValue(question);
  }, []);

  return (
    <ReactQuillStyle
      modules={module}
      theme="snow"
      value={value || question}
      name={name}
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
