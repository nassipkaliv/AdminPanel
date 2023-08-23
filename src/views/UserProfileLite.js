import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import UserStats from "../components/user-profile-lite/UserStats";
import PartnerTarif from "../components/user-profile-lite/PartnerTarif";

const UserProfileLite = () => (
  <Container fluid className="main-content-container py-6 pt-4"> 
    <Row>
      <Col sm="5">
        <UserDetails />
      </Col>
      <Col sm="7">
        <UserStats />
      </Col>
      <Col sm="5">
        <UserAccountDetails />
      </Col>
      <Col sm="5">
        <PartnerTarif />
      </Col>
    </Row>
  </Container>
);

export default UserProfileLite;