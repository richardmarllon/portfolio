import styled from "styled-components";
import NameBox from "../NameBox";

export const HeaderContainer = styled.div`
  min-height: 10vh;
  border: 1px solid red;
  background-color: transparent;
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
    font-size: 2rem;
    cursor: pointer;
    line-height: 50px;
    width: 160px;
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
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-top: 0.5%;
  padding-left: 3rem;
  max-width: 50%;
`;
