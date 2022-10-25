import React from "react";
import { labelType } from "./model";

import { Container, Paragraph, Subtitle, Title } from "./styles";

const Label = (props) => {
  const { children, bold, type } = props;
  let component = null;
  switch (type) {
    case labelType.Title:
      component = <Title bold={bold}>{children}</Title>;
      break;
    case labelType.Subtitle:
      component = <Subtitle bold={bold}>{children}</Subtitle>;
      break;

    default:
      component = <Paragraph bold={bold}>{children}</Paragraph>;
      break;
  }
  return <Container {...props}>{component}</Container>;
};

export default Label;
