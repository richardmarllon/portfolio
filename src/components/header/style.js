import styled from "styled-components";
import NameBox from "../NameBox";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 10vh;
  background-color: ${(props) =>
    props.bg === "Home" ? "transparent;" : "#dce3e2;"}
  position: fixed;
  width: 100%;
  .nav-content .active {
    box-sizing: border-box;
    background: #c4c4c4;
    border-bottom: 1px solid #333;
  }
  .nav-content {
    width: 100vw;
    display: flex;
    justify-content: space-between;
  }
  a {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    cursor: pointer;
    line-height: 50px;
    width: 20%;
    height: 50px;
    background: rgba(196, 196, 196, 0.5);
  }
`;

export const StyledName = styled(NameBox)``;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  width: 50%;
  @media (max-width: 1150px) {
    a {
      font-size: 1.8vw;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    a {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    a {
      font-size: 1rem;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-top: 0.5%;
  padding-left: 3rem;
  max-width: 50%;
  h1 {
    font-size: 1.8rem;
  }
  p {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
