import React from "react";
import { Container, Row, Col } from "shards-react";

import NetworkCard from "../components/network/NetworkCard";

const Network = () => (
  <Container fluid className="main-content-container  px-4 py-4 pt-4 mt-3 ml-3">
    {/* Page Header */}
    <NetworkCard />
  </Container>
);

export default Network;
