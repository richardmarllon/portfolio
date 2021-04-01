import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: rgba(179, 163, 148, 0.5);
  font-size: max(4rem);
  font-family: Nunito, sans-serif;
  font-weight: bold;
  line-height: 8rem;
  text-align: center;
  letter-spacing: 0.12em;
  color: #102542;
  height: 8rem;
  @media (max-width: 1150px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
