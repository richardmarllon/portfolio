import React from "react";
import { ContainerBox, TextBox } from "./style";

const DescriptionBox = ({ children }) => {
  return (
    <ContainerBox>
      <TextBox>{children}</TextBox>
    </ContainerBox>
  );
};

export default DescriptionBox;
