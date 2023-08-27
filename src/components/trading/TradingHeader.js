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

const TradingHeader = ({}) => (
  <Card large className="w-100 py-3 px-3 pb-3">
    <Row className="d-flex pr-4 mr-4 pb-4 py-2">
         <div style={{ position: 'absolute', top: '0', right: '0', padding: '15px' }}>
              <Button className="d-flex align-items-center" style={{ borderRadius: '10px', height: '40px', fontSize: '14px'}}>
                Create new
              </Button>
          </div>
      <Col className="ml-2 px-2" lg={12}>
        <h1 className="mb-0 " style={{ color: 'var(--black, #1D2226)' }}>
          Trading
        </h1>
        <p className="mb-0 py-0" style={{ fontSize: '13px', fontWeight: '500', lineHeight: '140%', letterSpacing: '0.16px', color: 'var(--light-grey, #A9B0BA)'}}>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. <br/> является стандартной "рыбой" для текстов на латинице с начала XVI века.
        </p>
      </Col>
    </Row>

    <div className="mb-1">
    <di className="mb-1">
        <h1 className="pt-1 mb-1" style={{ fontSize: '26px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.22px', color: 'var(--black, #1D2226)' }}>
          Commission wallet
        </h1>
    </di>
  
    <Container>
      <Row>
        <Col lg="5">
          <div className="mt-2 border-right">
            <div className="d-flex flex-column mr-2 px-2" href="#">
              <span className="mt-auto" style={{ fontSize: '18px', letterSpacing: '0.2px', fontWeight: '600', color: 'var(--black, #1D2226)' }}>Status</span>
              <span style={{ color: 'var(--grey, #7E838E)', fontSize: '14px', fontWeight: '500', letterSpacing: '0.16px' }}>Partner</span>
            </div>
          </div>
          <div className="mt-3 border-right">
            <div className="px-3"href="#">
              <p style={{ color: 'var(--black, #1D2226)', fontSize: '20px', letterSpacing: '-0.6px', fontWeight: '500'}}>$64,768<span style={{ color: 'var(--grey, #7E838E)'}}>.64</span></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  </Card>
);

TradingHeader.propTypes = {
  title: PropTypes.string,
};

export default TradingHeader;