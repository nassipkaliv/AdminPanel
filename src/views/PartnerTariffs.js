import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import PartnerTarifBuyItem from "../components/partner-tariffs/PartnerTarifBuyItem";
import PartnerTarifDetails from "../components/partner-tariffs/PartnerTarifDetails";
import PartnerTarifMessage from "../components/partner-tariffs/PartnerTarifMessage";
import PartnerUserTarif from "../components/partner-tariffs/PartnerUserTarif";

const PartnerTariffs = () => (
  <Container fluid className="main-content-container px-4 py-4 pt-4 mt-3 ml-3">
    {/* Page Header */}

    <Row className="pb-4">
      {/* Editor */}
      <Col lg="4" md="12">
        <PartnerUserTarif />
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="5" md="12">
        <PartnerTarifDetails />
      </Col>
    </Row>

    <PartnerTarifMessage/>
    
    <Row className="pb-4 py-4">
    <Col lg="3" md="6" xs="12">
      <PartnerTarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <PartnerTarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <PartnerTarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <PartnerTarifBuyItem />
    </Col>
  </Row>
  <Row className="pb-4 py-4">
    <Col lg="3" md="6" xs="12">
      <PartnerTarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <PartnerTarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <PartnerTarifBuyItem />
    </Col>
    <Col lg="3" md="6" xs="12">
      <PartnerTarifBuyItem />
    </Col>
  </Row>
  </Container>
);

export default PartnerTariffs;
