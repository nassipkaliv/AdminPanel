import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Row,
  Col,
  Container,
  Button
} from "shards-react";
import ForecastGraph from "./ForecastGraph";

const ForecastHeader = ({}) => (
  <Card large className="w-100 py-3 px-3 pb-3">
    <Row className="d-flex pr-4 mr-4 pb-4 py-2">
         <div style={{ position: 'absolute', top: '0', right: '0', padding: '15px' }}>
              <Button className="d-flex align-items-center" style={{ borderRadius: '10px', height: '40px', fontSize: '14px'}}>
                Create new
              </Button>
          </div>
      <Col className="ml-2 px-2" lg={12}>
        <h1 className="mb-0 " style={{ color: 'var(--black, #1D2226)' }}>
          Forecast
        </h1>
        <p className="mb-0 py-0" style={{ fontSize: '13px', fontWeight: '500', lineHeight: '140%', letterSpacing: '0.16px', color: 'var(--light-grey, #A9B0BA)'}}>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. <br/> является стандартной "рыбой" для текстов на латинице с начала XVI века.
        </p>
      </Col>
    </Row>

    <div className="mb-1">
    <Container>
      <Row className="mb-4">
        <Col lg="6" md="12" xs="12">
          <ForecastGraph />
        </Col>
        <Col lg="6" md="12" xs="12">
          <ForecastGraph />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col lg="6" md="12" xs="12">
          <ForecastGraph />
        </Col>
        <Col lg="6" md="12" xs="12">
          <ForecastGraph />
        </Col>
      </Row>
    </Container>
  </div>
  </Card>
);

ForecastHeader.propTypes = {
  title: PropTypes.string,
};

export default ForecastHeader;