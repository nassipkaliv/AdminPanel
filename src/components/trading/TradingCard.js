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
import Trading from "../../views/Trading";

const TradingCard = ({ title }) => (
  <Card large className="mb-1">
    <CardHeader className="pb-2">
      <h2 className="mb-0" style={{ fontWeight: 600,  color: 'var(--black, #1D2226)' }}>
        Comission wallet
      </h2>
    </CardHeader>
  
    <CardBody>

    <div className="d-flex flex-row justify-content-between">
      <div className="d-flex flex-column mr-2 px-2" href="#">
        <h3 className="mb-1" style={{ color: 'var(--light-grey, #A9B0BA)' }}>Balance</h3>
        <p style={{ color: 'var(--black, #1D2226)', fontSize: '26px', letterSpacing: '-0.52px', fontWeight: '500' }}>$9,768<span style={{ color: 'var(--grey, #7E838E)' }}>.64</span></p>
      </div>
      <div className="d-flex flex-row">
        <span className="px-2" style={{ color: 'var(--primary-blue, #1877EE)', fontSize: '19px' }}>Снять</span>
        <span className="px-2" style={{ color: 'var(--primary-blue, #1877EE)', fontSize: '19px' }}>Пополнить</span>
      </div>
    </div>

    <div className="py-2 d-flex flex-row">
      <img 
        className="mr-1"
        src={require("../../images/avatars/_.png")}
        alt="*"
        height="100%"
      />
      <p className="mb-0" style={{ color: 'var(--light-grey, #A9B0BA)', paddingBottom: '0', fontSize: '14px', lineHeight: '135%', letterSpacing: '0.14px'}}>Для торговли необходимо пополнить баланс, с него будет списываться комиссия</p>
    </div>
      <Container className="px-0 py-2 mb-1">
      <Row className="border-bottom align-items-center" style={{ height: '40px'}} >
        <Col>
          <div className="d-flex justify-content-between align-items-center">
              <h3 className="d-inline pt-2 py-2" style={{ color: "var(--light-grey, #A9B0BA)"}}>Сумма комисиий</h3>
              <h3 className="d-inline" style={{  color: 'var(--black, #1D2226)'}}>$9,9999</h3>
          </div>
        </Col>
      </Row>
      <Row className="border-bottom align-items-center" style={{ height: '40px'}} >
        <Col>
          <div className="d-flex justify-content-between align-items-center">
              <h3 className="d-inline pt-2 py-2" style={{ color: "var(--light-grey, #A9B0BA)"}}>Дата списания</h3>
              <h3 className="d-inline" style={{  color: 'var(--black, #1D2226)'}}>1.10.2023</h3>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center" style={{ height: '40px'}} >
        <Col>
          <div className="d-flex justify-content-between align-items-center">
              <h3 className="d-inline pt-2 py-2" style={{ color: "var(--light-grey, #A9B0BA)"}}>Адрес кошелька</h3>
              <h3 className="d-inline" style={{  color: 'var(--black, #1D2226)'}}>0x0000000000</h3>
          </div>
        </Col>
      </Row>
    </Container>
    </CardBody>
  </Card>
);

TradingCard.propTypes = {
  title: PropTypes.string,
};

export default TradingCard;