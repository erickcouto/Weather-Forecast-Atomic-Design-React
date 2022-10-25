import styled from "styled-components";

export const Container = styled.div``;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: #000;
  padding-right: 0.5rem;
`;
export const Title = styled.h2`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};

  color: #000;
`;
export const Subtitle = styled.h3`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: #000;
`;
