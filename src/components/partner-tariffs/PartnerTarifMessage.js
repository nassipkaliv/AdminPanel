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

const PartnerTarifMessage = ({ title }) => (
  <Card large className="w-100 py-3 px-3">
    <Row className="d-flex pr-4 mr-4">
        <img 
          className="ml-4"
          src={require("../../images/avatars/korzina.png")}
          alt="korzina"
          width={46}
          height={46}
        />
         <div style={{ position: 'absolute', top: '0', right: '0', padding: '10px' }}>
              <button style={{ border: 'none', background: 'var(--light-bg-elements, #F4F5F7)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967Z" fill="#A9B0BA"/>
                </svg>
              </button>
          </div>
      <Col className="ml-2 px-2"lg={11}>
        <h3 className="mb-0 " style={{ color: 'var(--black, #1D2226)' }}>
          При покупке тарифа
        </h3>
        <p className="mb-0 py-0" style={{ fontSize: '13px', fontWeight: '500', lineHeight: '140%', letterSpacing: '0.16px', color: 'var(--light-grey, #A9B0BA)'}}>
          Вы получите доступ ко всем его возможностям и все привилегии, указанные в его описании на срок 365 дней. Для покупки нового тарифа вам необходимо будет
          либо заполнить текущий тариф либо дождаться его завершения. При наличии активного тарифа вы не можете покупать тарифы уровнем ниже него.
        </p>
      </Col>
    </Row>
  </Card>
);

PartnerTarifMessage.propTypes = {
  title: PropTypes.string,
};

export default PartnerTarifMessage;