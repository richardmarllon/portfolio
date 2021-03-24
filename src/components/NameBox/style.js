import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: max(3rem, 24px);
  font-weight: bold;
  letter-spacing: 0.12em;
  color: var(--font-color);
  text-transform: uppercase;
`;

export const StyledSubTitle = styled.p`
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.245em;
  color: var(--font-color);
  text-transform: uppercase;
`;
// max(MIN, min(VAL, MAX))
