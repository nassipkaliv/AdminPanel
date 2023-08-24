import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import ClientTarif from "../components/user-profile-lite/ClientTarif";
import UserStats from "../components/user-profile-lite/UserStats";
import PartnerTarif from "../components/user-profile-lite/PartnerTarif";

const UserProfileLite = () => (
  <Container fluid className="main-content-container py-6 pt-4"> 
    <Row style={{ padding: '8px 17px'}}>
      <Col sm="5" style={{ marginRight: '-6px'}}>
        <UserDetails />
      </Col>
      <Col sm="7">
        <UserStats />
      </Col>
      <Col sm="5" style={{ marginTop: '24px', marginRight: '-6px'}}>
        <ClientTarif />
      </Col>
      <Col sm="7" style={{ marginTop: '24px'}}>
        <PartnerTarif />
      </Col>
    </Row>
  </Container>
);

export default UserProfileLite;