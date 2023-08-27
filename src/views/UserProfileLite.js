import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import ClientTarif from "../components/user-profile-lite/ClientTarif";
import UserStats from "../components/user-profile-lite/UserStats";
import PartnerTarif from "../components/user-profile-lite/PartnerTarif";

const UserProfileLite = () => (
  <Container fluid className="main-content-container py-4 pt-4"> 
    <Row style={{ padding: '8px 17px'}}>
      <Col lg="5" md="12" sm="12" style={{ marginRight: '-6px'}}>
        <UserDetails />
      </Col>
      <Col lg="7" md="12" sm="12">
        <UserStats />
      </Col>
      <Col lg="5" md="12" sm="12" style={{ marginTop: '24px', marginRight: '-6px'}}>
        <ClientTarif />
      </Col>
      <Col lg="5" md="12" sm="12" style={{ marginTop: '24px'}}>
        <PartnerTarif />
      </Col>
    </Row>
  </Container>
);

export default UserProfileLite;