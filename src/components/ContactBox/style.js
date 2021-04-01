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
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  p {
    display: none;
  }
  h1 {
    color: white;
  }
`;

export const ResumeBtn = styled.button`
  margin: 0.5rem 0;
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
  display: block !important;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  max-width: 40%;
`;
