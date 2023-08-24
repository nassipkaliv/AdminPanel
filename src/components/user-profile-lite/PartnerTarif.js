import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Progress,
  Row,
  Col,
  Container,
  Button
} from "shards-react";

const PartnerTarif = ({ title }) => (
  <Card small className="mb-1">
    <CardHeader className="border-bottom">
      <h2 className="mb-0" style={{ fontSize: '22px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.22px', color: 'var(--black, #1D2226)' }}>
        Тариф партнера
      </h2>
    </CardHeader>
  
    <CardBody>
    <div className="mb-3"
        style={{
          position: "relative",
          height: "40px",
          backgroundColor: "var(--pimary-light-blue, #ECF5FF)"
        }}
      >
        <Progress
          style={{ height: "100%", borderRadius: '10px', backgroundColor: 'var(--pimary-light-blue, #ECF5FF)', }}
          className="mb-3"
          value={30}
        />
        <h3
          className="mb-0 d-flex align-items-center justify-content-center"
          style={{
            color: 'var(--black, #1D2226)',
            fontSize: '17px',
            fontWeight: '600',
            lineHeight: '140%',
            letterSpacing: '0.17px',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          Тариф (6/12 d)
        </h3>
      </div>
      <Container className="mb-4 py-2">
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-inline" style={{ color: "var(--light-grey, #A9B0BA)"}}>Clients</div>
              <div className="d-inline">6/10</div>
            </div>
            <div className="mb-3" style={{ position: "relative", height: "15px", color: "var(--secondary-orange-2, #FFBF82)" }}>
              <Progress theme="warning" style={{ height: "100%", borderRadius: '10px', backgroundColor: 'var(--secondary-light-orange, #FFF1E3)' }} value={60} />
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-inline" style={{ color: "var(--light-grey, #A9B0BA)"}}>LV Slots</div>
              <div className="d-inline">17/30</div>
            </div>
            <div className="mb-3" style={{ position: "relative", height: "15px", color: "var(--secondary-orange-2, #FFBF82)" }}>
              <Progress theme="warning" style={{ height: "100%", borderRadius: '10px', backgroundColor: 'var(--secondary-light-orange, #FFF1E3)' }} value={60} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-inline" style={{ color: "var(--light-grey, #A9B0BA)"}}>Slots</div>
              <div className="d-inline">6/10</div>
            </div>
            <div className="mb-2" style={{ position: "relative", height: "15px", color: "var(--secondary-orange-2, #FFBF82)" }}>
              <Progress theme="warning" style={{ height: "100%", borderRadius: '10px', backgroundColor: 'var(--secondary-light-orange, #FFF1E3)' }} value={60} />
            </div>
          </Col>
          <Col>
            {/* Empty Col */}
          </Col>
        </Row>
      </Container>
      <div className="text-right">
        <Button style={{ fontSize: '19px', fontWeight: '400', backgroundColor: 'var(--pimary-blue, #1877EE)', borderRadius: '10px' }}>$9,999 Take</Button>
      </div>
    </CardBody>
    
  </Card>
);

PartnerTarif.propTypes = {
  title: PropTypes.string,
};

export default PartnerTarif;