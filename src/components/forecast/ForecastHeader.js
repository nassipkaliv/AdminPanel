import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Row,
  Col,
  Container,
  Button,
  Modal,
  ModalBody,
  FormSelect
} from "shards-react";
import ForecastGraph from "./ForecastGraph";

class ForecastHeader extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

  render() {
    const { open } = this.state;
    return (
      <Card large className="w-100 py-3 px-3 pb-3">
        <Row className="d-flex pr-4 mr-4 pb-4 py-2">
          <div style={{ position: 'absolute', top: '0', right: '0', padding: '15px' }}>
            <Button  onClick={this.toggle} className="d-flex align-items-center" style={{ borderRadius: '10px', height: '58px', fontSize: '19px'}}>
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

        <Modal open={open} toggle={this.toggle}>
          <ModalBody>
            <img
              style={{ float: "right" }}
              src={require("../../images/avatars/cross.png")}
              alt="close"
            />
            <h1 style={{ color: 'var(--black, #1D2226)', textAlign: 'center' }}>Forecast dialog</h1>
            <p style={{ color: 'var(--light-grey, #A9B0BA)', fontSize: '16px', textAlign: 'center' }}>Lorem Ipsum - это текст-"рыба", часто используемый в печати</p>

            <div className="mb-2 pb-2">
              <h3 style={{ color: 'var(--light-grey, #A9B0BA)' }}>
                Stock
              </h3>
              <FormSelect style={{ fontSize: '20px', fontWeight: '500', lineHeight: '140%', color: 'var(--black, #1D2226)', border: 'none'}}>
                <option value="first">Stock</option>
                <option value="second">This is the second option.</option>
                <option value="third" disabled>
                  This option is disabled.
                </option>
              </FormSelect>
            </div>
            <div className="mb-2 pb-2">
              <h3 style={{ color: 'var(--light-grey, #A9B0BA)' }}>
                Coin
              </h3>
              <FormSelect style={{ fontSize: '20px', fontWeight: '500', lineHeight: '140%', color: 'var(--black, #1D2226)', border: 'none'}}>
                <option value="first">Bitcoin</option>
                <option value="second">This is the second option.</option>
                <option value="third" disabled>
                  This option is disabled.
                </option>
              </FormSelect>
            </div>

            <h3 style={{ color: 'var(--light-grey, #A9B0BA)' }}>
              Analytic
            </h3>
            <div className="px-2 mb-2 pb-4">
              <h3 style={{ color: 'var(--black, #1D2226)', fontSize: '18px'}}>Name</h3>
              <h3 style={{ color: 'var(--black, #1D2226)'}}>jgbcfybtasd<br />asdasdasdasd<br />asdasdasdasdas</h3>
            </div>
            <Row>
              <Col className="w-50 pr-2" lg="6">
                <Button outline block style={{ borderRadius: '10px', height: '58px', fontSize: '19px'}}>
                  Cancel
                </Button>
              </Col>
              <Col className="w-50 pl-2" lg="6">
                <Button block style={{ borderRadius: '10px', height: '58px', fontSize: '19px'}} >
                  Apply
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Card>
    );
  }
}

export default ForecastHeader;