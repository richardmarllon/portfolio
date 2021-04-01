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
  /* border: 1px solid red; */
  align-self: stretch;
  width: 50%;
`;
export const RightSide = styled.section`
  box-sizing: border-box;
  /* border: 1px solid red; */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
