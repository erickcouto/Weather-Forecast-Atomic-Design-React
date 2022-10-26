import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../atoms/CustomButton";
import Label from "../../atoms/Label";
import { setSelectedRegion } from "../../store/Region/slice";

import { Container } from "./styles";

const RegionItem = (props) => {
  const { globalIdLocal, idAreaAviso } = props?.data;
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setSelectedRegion(props?.data));
  };
  return (
    <Container>
      <Label bold>
        {globalIdLocal} {idAreaAviso}
      </Label>
      <CustomButton onClick={() => handleOnClick(props?.data)}>
        Show {">>"}
      </CustomButton>
    </Container>
  );
};

export default RegionItem;
