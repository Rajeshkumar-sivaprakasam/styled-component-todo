import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ bg }) => bg};
  padding: 40px 0;

  h1 {
    color: red;
  }

  &:hover {
    background-color: black;
  }
`;
