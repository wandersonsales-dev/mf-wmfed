import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1b0000;
  color: #fff;
`;

const SearchInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #1b0000;
  background: #fff;
  border: none;
  border-radius: 3px;
`;

const SearchButton = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  color: #fff;
  background: #9a0000;
  border: none;
  border-radius: 3px;
`;

export { FormContainer, SearchInput, SearchButton };
