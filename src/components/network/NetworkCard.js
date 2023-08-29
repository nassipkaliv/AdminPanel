import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Row,
  Col,
  Container,
  Button,
  CardBody,
  CardHeader
} from "shards-react";

const NetworkCard = ({}) => (
  <Card large className="w-100 py-3 px-3 pb-3">
    <CardHeader className="text-left d-flex flex-row align-items-center position-relative pt-0 border-bottom">

    <div className="mb-3 mx-2 mr-4">
        <img
          className="rounded-circle"
          src={require("../../images/avatars/0.jpg")}
          alt="user avatar"
        />
    </div>
    <div>
        <div className="flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className="mb-0">Наталья Шуговитова</h1>
        </div>
        <h3 className="mb-2 mt-0">shugovitova96@gmail.com</h3>

        <div className="mb-1" style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '210px', padding: '0px 4px',  borderRadius: '8px', background: 'var(--pimary-light-blue, #ECF5FF)' }}>
          <h3 className="mb-0" style={{ fontSize: '13px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Ref link
          </h3>
          <h3 className="mb-0" style={{ fontSize: '13px', fontWeight: 600, lineHeight: '140%', color: 'var(--pimary-blue, #1877EE)' }}>
            http://some_ref...
          </h3>
          <button style={{ border: 'none', background: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5.625 2.25H10.95C12.6302 2.25 13.4702 2.25 14.112 2.57698C14.6765 2.8646 15.1354 3.32354 15.423 3.88803C15.75 4.52976 15.75 5.36984 15.75 7.05V12.375M4.65 15.75H10.725C11.5651 15.75 11.9851 15.75 12.306 15.5865C12.5882 15.4427 12.8177 15.2132 12.9615 14.931C13.125 14.6101 13.125 14.1901 13.125 13.35V7.275C13.125 6.43492 13.125 6.01488 12.9615 5.69401C12.8177 5.41177 12.5882 5.1823 12.306 5.03849C11.9851 4.875 11.5651 4.875 10.725 4.875H4.65C3.80992 4.875 3.38988 4.875 3.06901 5.03849C2.78677 5.1823 2.5573 5.41177 2.41349 5.69401C2.25 6.01488 2.25 6.43492 2.25 7.275V13.35C2.25 14.1901 2.25 14.6101 2.41349 14.931C2.5573 15.2132 2.78677 15.4427 3.06901 15.5865C3.38988 15.75 3.80992 15.75 4.65 15.75Z" stroke="#1877EE" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
        <div className="mb-1" style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '100%', padding: '4px 4px', borderRadius: '8px' }}>
          <h3 className="mb-0" style={{ fontSize: '13px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Wallet
          </h3>
          <h3 className="mb-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>
            0x0000000000
          </h3>
        </div>
      </div>
    </CardHeader>

    <CardBody className="d-flex flex-column">

      {/* 1 user */}
      <div className="d-flex py-2 px-2">
          <div className="mr-3 px-2">
            <img 
              className="mr-3"
              src={require("../../images/avatars/Minus.png")}
              alt="minus"
              height={32}
              width={32}
            />
            <img 
              className="rounded-circle"
              src={require("../../images/avatars/1.jpg")}
              alt="user avatar"
              width={82}
              height={82}
            />
          </div>
          <div>
          <div className="flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="mb-0" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>Наталья Шуговитова</h1>
          </div>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Rank: <span style={{ color: 'var(--black, #1D2226)'}}>Sinker</span>
          </p>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Refs: <span style={{ color: 'var(--black, #1D2226)'}}>12345</span>
          </p>

          </div>
        </div>

        {/* 2user */}
        <div className="d-flex py-2 px-2" style={{ marginLeft: "70px"}}>
          <div className="mr-3 px-2">
            <img 
              className="mr-3"
              src={require("../../images/avatars/Minus.png")}
              alt="minus"
              height={32}
              width={32}
            />
            <img 
              className="rounded-circle"
              src={require("../../images/avatars/1.jpg")}
              alt="user avatar"
              width={82}
              height={82}
            />
          </div>
          <div>
          <div className="flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="mb-0" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>Наталья Шуговитова</h1>
          </div>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Rank: <span style={{ color: 'var(--black, #1D2226)'}}>Sinker</span>
          </p>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Refs: <span style={{ color: 'var(--black, #1D2226)'}}>12345</span>
          </p>

          </div>
        </div>

        {/* 3 user */}
        <div className="d-flex py-2 px-2" style={{ marginLeft: "140px"}}>
          <div className="mr-3 px-2">
            <img 
              className="mr-3"
              src={require("../../images/avatars/Plus.png")}
              alt="minus"
              height={32}
              width={32}
            />
            <img 
              className="rounded-circle"
              src={require("../../images/avatars/1.jpg")}
              alt="user avatar"
              width={82}
              height={82}
            />
          </div>
          <div>
          <div className="flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="mb-0" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>Наталья Шуговитова</h1>
          </div>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Rank: <span style={{ color: 'var(--black, #1D2226)'}}>Sinker</span>
          </p>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Refs: <span style={{ color: 'var(--black, #1D2226)'}}>12345</span>
          </p>

          </div>
        </div>

        {/* 4 user */}
        <div className="d-flex py-2 px-2" style={{ marginLeft: "140px"}}>
          <div className="mr-3 px-2">
            <img 
              className="mr-3"
              src={require("../../images/avatars/Minus.png")}
              alt="minus"
              height={32}
              width={32}
            />
            <img 
              className="rounded-circle"
              src={require("../../images/avatars/1.jpg")}
              alt="user avatar"
              width={82}
              height={82}
            />
          </div>
          <div>
          <div className="flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="mb-0" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>Наталья Шуговитова</h1>
          </div>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Rank: <span style={{ color: 'var(--black, #1D2226)'}}>Sinker</span>
          </p>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Refs: <span style={{ color: 'var(--black, #1D2226)'}}>12345</span>
          </p>

          </div>
        </div>

        {/* 5 user */}
        <div className="d-flex py-2 px-2" style={{ marginLeft: "210px"}}>
          <div className="mr-3 px-2">
            <img 
              className="mr-3"
              src={require("../../images/avatars/Plus.png")}
              alt="minus"
              height={32}
              width={32}
            />
            <img 
              className="rounded-circle"
              src={require("../../images/avatars/1.jpg")}
              alt="user avatar"
              width={82}
              height={82}
            />
          </div>
          <div>
          <div className="flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="mb-0" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>Наталья Шуговитова</h1>
          </div>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Rank: <span style={{ color: 'var(--black, #1D2226)'}}>Sinker</span>
          </p>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Refs: <span style={{ color: 'var(--black, #1D2226)'}}>12345</span>
          </p>

          </div>
        </div>

        {/* 6user */}
        <div className="d-flex py-2 px-2" style={{ marginLeft: "210px"}}>
          <div className="mr-3 px-2">
            <img 
              className="mr-3"
              src={require("../../images/avatars/Plus.png")}
              alt="minus"
              height={32}
              width={32}
            />
            <img 
              className="rounded-circle"
              src={require("../../images/avatars/1.jpg")}
              alt="user avatar"
              width={82}
              height={82}
            />
          </div>
          <div>
          <div className="flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="mb-0" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>Наталья Шуговитова</h1>
          </div>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Rank: <span style={{ color: 'var(--black, #1D2226)'}}>Sinker</span>
          </p>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Refs: <span style={{ color: 'var(--black, #1D2226)'}}>12345</span>
          </p>

          </div>
        </div>

        {/* 7 user */}
        <div className="d-flex py-2 px-2" style={{ marginLeft: "70px"}}>
          <div className="mr-3 px-2">
            <img 
              className="mr-3"
              src={require("../../images/avatars/Minus.png")}
              alt="minus"
              height={32}
              width={32}
            />
            <img 
              className="rounded-circle"
              src={require("../../images/avatars/1.jpg")}
              alt="user avatar"
              width={82}
              height={82}
            />
          </div>
          <div>
          <div className="flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="mb-0" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>Наталья Шуговитова</h1>
          </div>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Rank: <span style={{ color: 'var(--black, #1D2226)'}}>Sinker</span>
          </p>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Refs: <span style={{ color: 'var(--black, #1D2226)'}}>12345</span>
          </p>

          </div>
        </div>

        {/* 8 user */}
        <div className="d-flex py-2 px-2">
          <div className="mr-3 px-2">
            <img 
              className="mr-3"
              src={require("../../images/avatars/Minus.png")}
              alt="minus"
              height={32}
              width={32}
            />
            <img 
              className="rounded-circle"
              src={require("../../images/avatars/1.jpg")}
              alt="user avatar"
              width={82}
              height={82}
            />
          </div>
          <div>
          <div className="flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="mb-0" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>Наталья Шуговитова</h1>
          </div>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Rank: <span style={{ color: 'var(--black, #1D2226)'}}>Sinker</span>
          </p>
          <p className="mb-1 mt-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Refs: <span style={{ color: 'var(--black, #1D2226)'}}>12345</span>
          </p>

          </div>
        </div>
    </CardBody>

  </Card>
);

NetworkCard.propTypes = {
  title: PropTypes.string,
};

export default NetworkCard;