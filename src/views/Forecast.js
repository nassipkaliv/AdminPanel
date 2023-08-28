import React from "react";
import { Container, Row, Col } from "shards-react";

import ForecastHeader from "../components/forecast/ForecastHeader";

const Forecast = () => (
  <Container fluid className="main-content-container  px-4 py-4 pt-4 mt-3 ml-3">
    {/* Page Header */}
    <ForecastHeader />
  </Container>
);

export default Forecast;
