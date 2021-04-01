import styled from "styled-components";

export const ContainerBox = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const TextBox = styled.p`
  font-family: Nunito, sans-serif;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 22px;
  text-align: left;
  color: #102542;
  @media (max-width: 800px) {
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
  }
`;
