import styled from "styled-components";
import NameBox from "../NameBox";

export const Container = styled.section`
  width: 30vw;
  max-width: 600px;
  height: 65vh;
  max-height: 800px;
  background: rgba(36, 56, 82, 0.6);
  backdrop-filter: blur(16px);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  p {
    display: none;
  }
  h1 {
    color: white;
    font-size: 2rem;
  }
  @media (max-width: 1150px) {
    width: 70vw;
  }
  @media (max-width: 800px) {
    width: 90vw;
    h1 {
      font-size: 1.7rem;
    }
  }
`;

export const ResumeBtn = styled.button`
  font-size: 1.5rem;
  padding: 1rem;
  color: white;
  text-transform: uppercase;
  background: #102542;
  border-radius: 5px;
  font-family: Nunito, sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(16, 37, 66, 0.8);
  }
`;

export const GenericText = styled.p`
  display: inline-block !important;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 600px) {
    display: none !important;
  }
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  max-width: 40%;
`;
