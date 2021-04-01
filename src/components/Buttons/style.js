import styled from "styled-components";

export const StyledLink = styled.img`
  outline: none;
  width: 45px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.section`
  margin-top: 2rem;
  width: 40%;
  max-width: 200px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
