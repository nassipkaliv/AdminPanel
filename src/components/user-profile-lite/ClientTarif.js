import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Progress,
  Row,
  Col,
  Container
} from "shards-react";

const ClientTarif = ({ title }) => (
  <Card small className="mb-1">
    <CardHeader className="border-bottom">
      <h2 className="mb-0" style={{ fontSize: '22px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.22px', color: 'var(--black, #1D2226)' }}>
        Тариф клиента
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

      <Container className="px-0 py-1">
      <Row style={{ height: '40px'}} className="border-bottom">
        <Col xs lg={10} >
          <h3 style={{  
            color: 'var(--light-grey, #A9B0BA)',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '140%',
            letterSpacing: '0.17px',}}>
            Торговые боты
          </h3>
        </Col>
        <Col xs={4} md={2}>
        <p style={{  
            color: 'var(--black, #1D2226)',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '140%',
            letterSpacing: '0.17px',}}>
            6/30
        </p>
        </Col>
      </Row>
      <Row style={{ height: '40px'}} className="border-bottom mt-2">
        <Col xs lg={10}>
          <h3 style={{  
            color: 'var(--light-grey, #A9B0BA)',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '140%',
            letterSpacing: '0.17px',}}>
            Максимальная сумма депозита
          </h3>
        </Col>
        <Col xs={4} md={2}>
        <p style={{  
            color: 'var(--black, #1D2226)',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '140%',
            letterSpacing: '0.17px',}}>
            500$
        </p>
        </Col>
      </Row>
      <Row style={{ height: '40px'}} className="border-bottom mt-2">
        <Col xs lg={10}>
          <h3 style={{  
            color: 'var(--light-grey, #A9B0BA)',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '140%',
            letterSpacing: '0.17px',}}>
            Ставка биржи
          </h3>
        </Col>
        <Col xs={4} md={2} >
        <p style={{  
            color: 'var(--black, #1D2226)',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '140%',
            letterSpacing: '0.17px',}}>
            +4%
        </p>
        </Col>
      </Row>
      <Row style={{ height: '40px'}} className="mt-2">
        <Col xs lg={10} >
          <h3 style={{  
            color: 'var(--light-grey, #A9B0BA)',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '140%',
            letterSpacing: '0.17px',}}>
            Комиссия с прибыли бота
          </h3>
        </Col>
        <Col xs={4} md={2} >
        <p style={{  
            color: 'var(--black, #1D2226)',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '140%',
            letterSpacing: '0.17px',}}>
            8%
        </p>
        </Col>
      </Row>
    </Container>
    </CardBody>
  </Card>
);

ClientTarif.propTypes = {
  title: PropTypes.string,
};

export default ClientTarif;
