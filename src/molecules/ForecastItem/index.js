import React from "react";
import Label from "../../atoms/Label";

import { Container } from "./styles";

const ForecastItem = (props) => {
  const { tMin, tMax, precipitaProb, idAreaAviso, forecastDate } = props.data;
  return (
    <Container>
      <Label bold>
        {idAreaAviso} {forecastDate}
      </Label>
      <Label>Minimum temperature:{tMin}°C</Label>
      <Label>Maximum temperature:{tMax}°C</Label>
      <Label>% precipitation:{precipitaProb}%</Label>
    </Container>
  );
};

export default ForecastItem;
