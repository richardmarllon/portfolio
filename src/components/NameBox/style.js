import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.12em;
  color: var(--font-color);
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const StyledSubTitle = styled.p`
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.245em;
  color: var(--font-color);
  text-transform: uppercase;
`;
