import styled from "styled-components";

export const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;

export const ImgBox = styled.img`
  width: 60vw;
  max-width: 800px;
  @media (max-width: 1150px) {
    width: 70vw;
  }
  @media (max-width: 800px) {
    width: 80vw;
  }
  @media (max-width: 600px) {
    width: 90vw;
  }
`;
