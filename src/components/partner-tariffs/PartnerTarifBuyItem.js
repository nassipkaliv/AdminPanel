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

const PartnerTarifBuyItem = ({ title }) => (
  <Card small className="mb-1">
    <CardHeader style={{ padding: '0rem 1rem'}}>
        <h2 className="pt-1 mt-1 mb-1" style={{ color: 'var(--black, #1D2226)'}}>
          Название тарифа
        </h2>
        <div style={{ fontSize: '36px', color: 'var(--black, #1D2226)', letterSpacing: '-0.72px'}}>
          $9,999
        </div>

    </CardHeader>
  
    <CardBody>
      <button className="mb-3 w-100"
        style={{
          borderRadius: '10px',
          border: '1.5px solid var(--pimary-blue-2, #8BBEFF)',
          position: "relative",
          height: "50px",
          background: '#fff',
          fontSize: '19px',
          textAlign: 'center',
          color: 'var(--pimary-blue, #1877EE)'
        }}
      >
        Buy
      </button>

      <Container className="px-0 py-1">
        <Row className="px-2 mb-3">
          <Col>
            <div className="d-flex align-items-center"> {/* Use flexbox to align elements */}
              <img src={require("../../images/avatars/Check.png")} alt="check" />
              <h3 className="ml-2 mb-0" style={{ fontSize: '17px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.17px',  color: 'var(--black, #1D2226)' }}>
                Параметры тарифа
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="px-2 mb-3">
          <Col>
            <div className="d-flex align-items-center"> {/* Use flexbox to align elements */}
              <img src={require("../../images/avatars/Check.png")} alt="check" />
              <h3 className="ml-2 mb-0" style={{ fontSize: '17px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.17px',  color: 'var(--black, #1D2226)' }}>
                Параметры тарифа
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="px-2 mb-3">
          <Col>
            <div className="d-flex align-items-center"> {/* Use flexbox to align elements */}
              <img src={require("../../images/avatars/Check.png")} alt="check" />
              <h3 className="ml-2 mb-0" style={{ fontSize: '17px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.17px',  color: 'var(--black, #1D2226)' }}>
                Параметры тарифа
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="px-2 ">
          <Col>
            <div className="d-flex align-items-center"> {/* Use flexbox to align elements */}
              <img src={require("../../images/avatars/Check.png")} alt="check" />
              <h3 className="ml-2 mb-0" style={{ fontSize: '17px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.17px',  color: 'var(--black, #1D2226)' }}>
                Параметры тарифа
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </CardBody>
  </Card>
);

PartnerTarifBuyItem.propTypes = {
  title: PropTypes.string,
};

export default PartnerTarifBuyItem;