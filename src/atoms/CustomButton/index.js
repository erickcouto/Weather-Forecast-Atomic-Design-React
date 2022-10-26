import React from "react";

import { Button } from "./styles";

const CustomButton = (props) => {
  const { children, onClick } = props;
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
