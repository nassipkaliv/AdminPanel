import React from "react";
import { Container, Row, Col } from "shards-react";

import FinanceHeader from "../components/finance/FinanceHeader";
import FinanceTable from "../components/finance/FinanceTable";

const Finance = () => (
  <Container fluid className="main-content-container px-4 py-4 pt-4 mt-3 ml-3">
    {/* Page Header */}
    <FinanceHeader />
    <FinanceTable />
</Container>
);

export default Finance;
