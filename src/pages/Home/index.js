import React, { useState } from "react";
import Forecast from "../../organisms/Forecast";
import Regions from "../../organisms/Regions";
import { Container, Main, Sidebar } from "./styles";

function Home() {
  const [selectedRegion, setSelectedRegion] = useState("");
  return (
    <Container>
      <Sidebar>
        <Regions onRegionSelected={setSelectedRegion} />
      </Sidebar>
      <Main>
        <Forecast selectedRegion={selectedRegion} />
      </Main>
    </Container>
  );
}

export default Home;
