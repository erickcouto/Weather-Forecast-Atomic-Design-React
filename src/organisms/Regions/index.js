import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputText from "../../atoms/InputText";
import Label from "../../atoms/Label";
import { labelType } from "../../atoms/Label/model";
import RegionItem from "../../molecules/RegionItem";
import { getRegions } from "../../store/service";
import { Row } from "../../styles/Global";

import { Container, ContainerRegions } from "./styles";

const Regions = ({ onRegionSelected }) => {
  const [filter, setFilter] = useState();
  const [filteredRegions, setFilteredRegions] = useState([]);
  const dispatch = useDispatch();
  const { regions, error } = useSelector((state) => state.regions);

  useEffect(() => {
    dispatch(getRegions());
  }, [dispatch]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
    setFilteredRegions(
      regions.filter((region) =>
        region.idAreaAviso.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setFilteredRegions(regions);
  }, [regions]);

  return (
    <Container>
      <Label type={labelType.Title} bold>
        REGION
      </Label>
      <Row>
        <InputText
          placeholder="Filter region..."
          value={filter}
          onChange={handleFilter}
        />
      </Row>
      <ContainerRegions>
        {error && <p>Something went wrong</p>}
        {!error &&
          filteredRegions.map((region, index) => (
            <RegionItem key={index} data={region} />
          ))}
      </ContainerRegions>
    </Container>
  );
};

export default Regions;
