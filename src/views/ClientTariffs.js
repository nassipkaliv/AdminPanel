import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserTarif from "../components/client-tariffs/UserTarif";
import TarifDetails from "../components/client-tariffs/TarifDetails";
import TarifMessage from "../components/client-tariffs/TarifMessage";
import TarifBuyItem from "../components/client-tariffs/TarifBuyItem";

const ClientTariffs = () => (
  <Container fluid className="main-content-container px-4 py-4 pt-4 mt-3 ml-3">
    {/* Page Header */}

    <Row className="pb-4">
      {/* Editor */}
      <Col lg="4" md="12">
        <UserTarif />
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="5" md="12">
        <TarifDetails />
      </Col>
    </Row>

    <TarifMessage/>
    
    <Row className="pb-4 py-4">
    <Col lg="3" md="6" xs="12">
      <TarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <TarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <TarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <TarifBuyItem />
    </Col>
  </Row>
  <Row className="pb-4 py-4">
    <Col lg="3" md="6" xs="12">
      <TarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <TarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <TarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <TarifBuyItem />
    </Col>
  </Row>
  </Container>
);

export default ClientTariffs;
