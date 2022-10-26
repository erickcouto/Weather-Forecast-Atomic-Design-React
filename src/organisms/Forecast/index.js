import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { labelType } from "../../atoms/Label/model";
import { Title } from "../../atoms/Label/styles";
import ForecastItem from "../../molecules/ForecastItem";
import { getForecasts } from "../../store/Forecast/service";
import { Container, ForecastsContainer } from "./styles";

function Forecast() {
  const { forecasts, error } = useSelector((state) => state.forecasts);
  const { selectedRegion } = useSelector((state) => state.regions);

  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedRegion) {
      dispatch(getForecasts(selectedRegion.globalIdLocal));
    }
  }, [selectedRegion, dispatch]);

  return (
    <Container>
      <Title type={labelType.Title} bold>
        FORECAST
      </Title>
      <ForecastsContainer>
        {error && <p>Something went wrong</p>}

        {!error &&
          selectedRegion &&
          forecasts?.map((forecast, index) => (
            <ForecastItem
              key={index}
              data={{ ...forecast, idAreaAviso: selectedRegion.idAreaAviso }}
            />
          ))}
      </ForecastsContainer>
    </Container>
  );
}

export default Forecast;
