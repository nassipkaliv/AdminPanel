import React from "react";
import { Container, Row, Col } from "shards-react";

import ComissionHeader from "../components/finance/ComissionHeader";
import FinanceComissionsTable from "../components/finance/FinanceComissionsTable";

const Comission = () => (
  <Container fluid className="main-content-container px-4 py-4 pt-4 mt-3 ml-3">
    {/* Page Header */}
    <ComissionHeader />
    <FinanceComissionsTable />
</Container>
);

export default Comission;
