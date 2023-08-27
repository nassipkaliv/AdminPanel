import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserTarif from "../components/client-tariffs/UserTarif";
import TarifDetails from "../components/client-tariffs/TarifDetails";
import TarifMessage from "../components/client-tariffs/TarifMessage";
import TarifBuyItem from "../components/client-tariffs/TarifBuyItem";
import TradingHeader from "../components/trading/TradingHeader";

const Trading = () => (
  <Container fluid className="main-content-container  px-4 py-4 pt-4 mt-3 ml-3">
    {/* Page Header */}
    <TradingHeader />
  </Container>
);

export default Trading;
