import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormInput,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardFooter,
  Button,
  Container,
  Row,
  FormSelect,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormRadio
} from "shards-react";
import { Link } from "react-router-dom";
import Trading from "../../views/Trading";

class TradingCreateBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, selectedStrategy: null };
    this.toggle = this.toggle.bind(this);
    this.changeStrategy = this.changeStrategy.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  changeStrategy(strategy) {
    this.setState({
      selectedStrategy: strategy
    });
  }

  render() {
    const { open } = this.state;

    return (
    <Card small className="my-4 mx-4" style={{ width: "636px" }}>
    <CardHeader className="text-left d-flex flex-column ">
      <h1 className="mb-0" style={{ color: 'var(--black, #1D2226)', fontWeight: '600'}}>Create bot</h1>
      <p className="mb-1 py-2" style={{ fontSize: '13px', fontWeight: '500', lineHeight: '140%', letterSpacing: '0.16px', color: 'var(--light-grey, #A9B0BA)'}}>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. <br/> является стандартной "рыбой" для текстов на латинице с начала XVI века.
        </p>
    </CardHeader>

    <CardBody>
      <Container>
        <Row className="mb-2">
          <Col lg="6" md="6" xs="12" className="mb-3">
            <h3 style={{ color: 'var(--light-grey, #A9B0BA)' }}>
              Stock
            </h3>
            <FormSelect style={{ fontSize: '20px', fontWeight: '500', lineHeight: '140%', color: 'var(--black, #1D2226)', border: 'none'}}>
              <option value="first">This is the first option</option>
              <option value="second">This is the second option.</option>
              <option value="third" disabled>
                This option is disabled.
              </option>
            </FormSelect>
          </Col>
          <Col lg="6" md="6" xs="12" className="mb-3">
            <h3 style={{ color: 'var(--light-grey, #A9B0BA)' }}>
              Coin
            </h3>
            <FormSelect style={{ fontSize: '20px', fontWeight: '500', lineHeight: '140%', color: 'var(--black, #1D2226)', border: 'none'}}>
              <option value="first">This is the first option</option>
              <option value="second">This is the second option.</option>
              <option value="third" disabled>
                This option is disabled.
              </option>
            </FormSelect>
          </Col>
          <Col lg="6" md="6" xs="12" className="mb-3">
            <h3 style={{ color: 'var(--light-grey, #A9B0BA)' }}>
              API key
            </h3>
            <FormInput
              id="feFirstName"
              value="Enter"
              onChange={() => {}} 
              style={{ border: 'none'}}
            />
          </Col>
          <Col lg="6" md="6" xs="12" className="mb-3">
            <h3 style={{ color: 'var(--light-grey, #A9B0BA)' }}>
              Limit (USDT)
            </h3>
            <FormInput
              id="feFirstName"
              value="Enter"
              onChange={() => {}} 
              style={{ border: 'none'}}
            />
          </Col>
        </Row>

        <h3 style={{ color: 'var(--light-grey, #A9B0BA)' }}>
          Strategy
        </h3>
        <h3 style={{ color: 'var(--black, #1D2226)', fontSize: '18px'}}>Name</h3>
        <h3 style={{ color: 'var(--black, #1D2226)'}}>jgbcfybtasd<br />asdasdasdasd<br />asdasdasdasdas</h3>
      </Container>
    </CardBody>

    <CardFooter> 
        <Button onClick={this.toggle} className="w-100" style={{ borderRadius: '10px', fontSize: '19px', fontWeight: '600', lineHeight: '140%'}}>
          Apply
        </Button>
        <Modal open={open} toggle={this.toggle}>
        <ModalBody>
            <img 
              style={{ float: "right"}}
              src={require("../../images/avatars/cross.png")}
              alt="close"
            />
            <h1 style={{ color: 'var(--black, #1D2226)', textAlign: 'center' }}>Выберите стратегию</h1>
            <p style={{ color: 'var(--light-grey, #A9B0BA)', fontSize: '16px', textAlign: 'center' }}>Lorem Ipsum - это текст-"рыба", часто используемый в печати</p>
            <FormRadio
            name="strategy"
            checked={this.state.selectedStrategy === "strategy"}
            onChange={() => {
            this.changeStrategy("strategy");
          }}
          >
          <div className="">
            <h3 style={{ color: 'var(--black, #1D2226)', fontSize: '18px'}}>Name</h3>
            <h3 style={{ color: 'var(--black, #1D2226)'}}>jgbcfybtasd<br />asdasdasdasd<br />asdasdasdasdas</h3>
          </div>
        </FormRadio>
        <FormRadio 
          name="strategy"
          checked={this.state.selectedStrategy === "strategy"}
          onChange={() => {
            this.changeStrategy("strategy");
          }}
        >
          <div className="d-flex flex-column">
            <h3 style={{ color: 'var(--black, #1D2226)', fontSize: '18px'}}>Name</h3>
            <h3 style={{ color: 'var(--black, #1D2226)'}}>jgbcfybtasd<br />asdasdasdasd<br />asdasdasdasdas</h3>
          </div>
        </FormRadio>
        <FormRadio 
          name="strategy"
          checked={this.state.selectedStrategy === "strategy"}
          onChange={() => {
            this.changeStrategy("strategy");
          }}
        >
          <div className="d-flex flex-column">
            <h3 style={{ color: 'var(--black, #1D2226)', fontSize: '18px'}}>Name</h3>
            <h3 style={{ color: 'var(--black, #1D2226)'}}>jgbcfybtasd<br />asdasdasdasd<br />asdasdasdasdas</h3>
          </div>
        </FormRadio>
          <Button className="w-100" style={{ borderRadius: '10px', fontSize: '19px', fontWeight: '600', lineHeight: '140%'}}>
            Use
          </Button>
          </ModalBody>
        </Modal>
    </CardFooter>
  </Card>



    );
  }
}

export default TradingCreateBot;
