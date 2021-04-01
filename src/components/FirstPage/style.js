import styled, { keyframes } from "styled-components";

const down = keyframes`
0% { 
  bottom: 10px;
  opacity: 1;
}
100% {
 bottom: 0px;
 opacity: 0.1;
}

`;

export const Container = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
`;

export const LeftSide = styled.div`
  min-height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  background-color: rgba(205, 215, 214, 0.7);
  @media (max-width: 800px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  min-height: 100vh;
  width: 50%;
  background: rgba(16, 37, 66, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px) {
    h1 {
      font-size: 3vw;
    }
    p {
      font-size: 2vw;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
    }
  }
`;

export const ScrollIcon = styled.img`
  transform: translateX(50%);
  position: fixed;
  right: 50%;
  animation: ${down} 1500ms ease infinite;
`;
