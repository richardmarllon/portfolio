import styled from "styled-components";

export const StyledSection = styled.section`
  padding-top: 10vh;
  min-height: 100vh;
  background: rgba(205, 215, 214, 0.7);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const InfoContainer = styled.div``;
export const LeftSide = styled.section`
  box-sizing: border-box;
  align-self: stretch;
  width: 50%;
  @media (max-width: 1150px) {
    width: 30vw;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export const RightSide = styled.section`
  box-sizing: border-box;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px) {
    width: 70vw;
  }
  @media (max-width: 800px) {
    width: 90vw;
    margin: 0 auto;
  }
`;
