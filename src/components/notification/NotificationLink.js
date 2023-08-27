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

const NotificationLink = ({ title }) => (
  <Card small className="d-flex w-100 py-2 px-3 mb-4 ">
    <Row className="pb-3 mt-3 d-flex align-items-center"> {/* Added d-flex and align-items-center */}
      <img 
        className="ml-4"
        src={require("../../images/avatars/tg.png")}
        alt="korzina"
        width={46}
        height={46}
      />
      <Col lg={10}>
        <h3 className="mb-0" style={{ color: 'var(--black, #1D2226)' }}>
          Чтобы получать уведомления вам необходимо зарегистрироваться в телеграм боте
        </h3>
      </Col>
      <Col lg={1} className="text-right">
        <Button className="d-flex align-items-center" style={{ borderRadius: '10px', height: '40px', fontSize: '14px', marginLeft: '40px' }}>
          Перейти
        </Button>
      </Col>
    </Row>
  </Card>
);

NotificationLink.propTypes = {
  title: PropTypes.string,
};

export default NotificationLink;
