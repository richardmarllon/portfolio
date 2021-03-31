import styled from "styled-components";

export const ContainerBox = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const TextBox = styled.p`
  font-family: Nunito, sans-serif;
  text-align: center;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 22px;
  color: #102542;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledBtn = styled.button`
  font-size: 2rem;
  text-transform: uppercase;
  color: #ffffff;
  background: rgba(16, 37, 66, 0.9);
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`;
