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
  CardFooter
} from "shards-react";

const UserTarif = ({ title }) => (
  <Card small className="mb-1">
    <CardHeader style={{ padding: '0rem 1rem'}}>
        <div className="mt-3" style={{ display: 'flex', alignItems: 'center', width: '80px', padding: '0px 4px',  borderRadius: '8px', background: 'var(--pimary-light-blue, #ECF5FF)' }}>
          <h3 className="mb-0" style={{ fontSize: '15px', fontWeight: 600, lineHeight: '140%', color: 'var(--pimary-blue, #1877EE)' }}>
            Your tarif
          </h3>
        </div>
        <h1 className="pt-1 mt-1 mb-1" style={{ fontSize: '26px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.22px', color: 'var(--black, #1D2226)' }}>
          Название тарифа
        </h1>
    </CardHeader>
  
    <CardBody>
      <div className="mb-3"
        style={{
          position: "relative",
          height: "50px",
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
    <CardFooter className="d-flex justify-content-center align-items-center">
      <button style={{ border: 'none', background: 'none', fontSize: '19px', color: 'var(--light-grey, #A9B0BA)'}}>
        Money back
      </button>
    </CardFooter>
  </Card>
);

UserTarif.propTypes = {
  title: PropTypes.string,
};

export default UserTarif;