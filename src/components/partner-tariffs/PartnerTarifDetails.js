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

const PartnerTarifDetails = ({ title }) => (
  <Card small className="mb-2">
    <CardHeader className="pb-0 pt-3">
        <p className="pt-3 mb-0" style={{ fontSize: '22px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.22px', color: 'var(--black, #1D2226)' }}>
          Параметры тарифа
        </p>
    </CardHeader>
  
    <CardBody className="mb-4 py-4" >
      {/* <div className="mb-3"
        style={{
          position: "relative",
          height: "40px",
          backgroundColor: "var(--pimary-light-blue, #ECF5FF)"
        }}
      >
      </div> */}

    <Container className="px-0 py-2 mb-1">
      <Row className="border-bottom align-items-center" style={{ height: '40px'}} >
        <Col>
          <div className="d-flex justify-content-between align-items-center">
              <h3 className="d-inline pt-2 py-2" style={{ color: "var(--light-grey, #A9B0BA)",
                fontSize: '17px',
                fontWeight: '600',
                lineHeight: '140%',
                letterSpacing: '0.17px'
                }}>Дата покупки</h3>
              <h3 className="d-inline" style={{  color: 'var(--black, #1D2226)',
                fontSize: '17px',
                fontWeight: '700',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>9.09.2023</h3>
          </div>
        </Col>
      </Row>
      <Row className="border-bottom align-items-center" style={{ height: '40px'}}  >
        <Col>
          <div className="d-flex justify-content-between align-items-center">
              <h3 className="d-inline pt-2 py-2" style={{ color: "var(--light-grey, #A9B0BA)",
                fontSize: '17px',
                fontWeight: '600',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>Дата истечения</h3>
              <h3 className="d-inline" style={{  color: 'var(--black, #1D2226)',
                fontSize: '17px',
                fontWeight: '700',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>1.10.2023</h3>
          </div>
        </Col>
      </Row>
      <Row className="border-bottom" style={{ height: '40px'}} >
        <Col>
          <div className="d-flex justify-content-between align-items-center">
              <h3 className="d-inline pt-2 py-2" style={{ color: "var(--light-grey, #A9B0BA)",
                fontSize: '17px',
                fontWeight: '600',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>Количество ботов</h3>
              <h3 className="d-inline" style={{  color: 'var(--black, #1D2226)',
                fontSize: '17px',
                fontWeight: '700',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>6/30</h3>
          </div>
        </Col>
      </Row>
      <Row className="border-bottom" style={{ height: '40px'}} >
        <Col>
          <div className="d-flex justify-content-between align-items-center">
              <h3 className="d-inline pt-2 py-2" style={{ color: "var(--light-grey, #A9B0BA)",
                fontSize: '17px',
                fontWeight: '600',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>Количество аналитиков</h3>
              <h3 className="d-inline" style={{  color: 'var(--black, #1D2226)',
                fontSize: '17px',
                fontWeight: '700',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>6/30</h3>
          </div>
        </Col>
      </Row>
      <Row className="border-bottom" style={{ height: '40px'}} >
        <Col>
          <div className="d-flex justify-content-between align-items-center">
              <h3 className="d-inline pt-2 py-2" style={{ color: "var(--light-grey, #A9B0BA)",
                fontSize: '17px',
                fontWeight: '600',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>Максимальная сумма депозита</h3>
              <h3 className="d-inline" style={{  color: 'var(--black, #1D2226)',
                fontSize: '17px',
                fontWeight: '700',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>500$</h3>
          </div>
        </Col>
      </Row>
      <Row className="border-bottom" style={{ height: '40px'}} >
        <Col>
          <div className="d-flex justify-content-between align-items-center">
              <h3 className="d-inline pt-2 py-2" style={{ color: "var(--light-grey, #A9B0BA)",
                fontSize: '17px',
                fontWeight: '600',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>Ставка биржи</h3>
              <h3 className="d-inline" style={{  color: 'var(--black, #1D2226)',
                fontSize: '17px',
                fontWeight: '700',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>+4%</h3>
          </div>
        </Col>
      </Row>
      <Row style={{ height: '40px'}} >
        <Col>
          <div className="d-flex justify-content-between align-items-center">
              <h3 className="d-inline pt-2 py-2" style={{ color: "var(--light-grey, #A9B0BA)",
                fontSize: '17px',
                fontWeight: '600',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>Комиссия с прибыли бота</h3>
              <h3 className="d-inline" style={{  color: 'var(--black, #1D2226)',
                fontSize: '1px',
                fontWeight: '700',
                lineHeight: '140%',
                letterSpacing: '0.17px'}}>8%</h3>
          </div>
        </Col>
      </Row>
    </Container>
    </CardBody>
  </Card>
);

PartnerTarifDetails.propTypes = {
  title: PropTypes.string,
};

export default PartnerTarifDetails;