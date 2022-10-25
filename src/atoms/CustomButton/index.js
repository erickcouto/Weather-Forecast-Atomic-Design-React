import React from "react";

import { Container } from "./styles";

const CustomButton = (props) => {
  const { children, onClick } = props;
  return (
    <Container onClick={onClick} {...props}>
      {children}
    </Container>
  );
};

export default CustomButton;
