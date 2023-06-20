import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import search from "../img/search.svg";

export default function SearchForm() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const handleSubmitForm = (data) => {
    const keyword = data.search.toLowerCase();

    setValue("search", "");
    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Label htmlFor="search">
        <SearchIcon src={search} alt="search" />
      </Label>
      <SearchInput id="search" placeholder="Search.." {...register("search")} />
    </Form>
  );
}

const Form = styled.form`
  padding: 0 8px;
  position: relative;
  flex: 1;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;

const SearchIcon = styled.img`
  width: 18px;
  height: 18px;

  filter: invert(46%) sepia(15%) saturate(303%) hue-rotate(171deg)
    brightness(92%) contrast(90%);
`;

const SearchInput = styled.input`
  display: block;
  padding: 8px;
  padding-left: 32px;
  width: 100%;
  outline: none;
  border: 1px solid #babfc4; // --black-200
  border-radius: 3px;

  &:focus {
    border-color: #6bbbf7;
    box-shadow: 0 0 0 4px #ebf4fb;
  }
`;
