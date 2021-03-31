import React from "react";
import { Container, ImgBox } from "./style";
const PreviewBox = ({img}) => {
  return (
    <Container>
      <ImgBox src={img} />
    </Container>
  );
};

export default PreviewBox;
