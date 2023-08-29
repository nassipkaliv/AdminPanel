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
  Button,
} from "shards-react";


const CoinTable = ({ title }) => (
  <Row className="">
      <Col lg={8}>
        <Card small className="mb-4">
          <CardBody className="p-0 pb-3">
            <table table className="table mb-4 py-4 px-2">
              <thead className="">
                <tr style={{ color: 'var(--light-grey, #A9B0BA)'}}>
                  <th scope="col" className="">
                    
                  </th>
                  <th scope="col" className="">
                    Coin
                    <img 
                      src={require("../../images/avatars/upend.png")}
                      alt="upend"
                      className="ml-1"
                    />
                  </th>
                  <th scope="col" className="">
                    Stock
                    <img 
                      src={require("../../images/avatars/upend.png")}
                      alt="upend"
                      className="ml-1"
                    />
                  </th>
                  <th scope="col" className="">
                    Strategy
                    <img 
                      src={require("../../images/avatars/upend.png")}
                      alt="upend"
                      className="ml-1"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td className="d-flex flex-row px-0">
                    <div className="px-0" href="#">
                      <img
                        className="user-avatar rounded-circle mr-2"
                        src={require("./../../images/avatars/Bitcoin.png")}
                        alt="Bitcoin"
                       
                      />
                    </div>
                    <div className="">
                      <div className="d-flex flex-column mr-2 px-2" href="#">
                        <span className="" style={{ fontSize: '18px', letterSpacing: '0.2px', fontWeight: '600', color: 'var(--black, #1D2226)' }}>Bitcoin</span>
                        <span style={{ color: 'var(--grey, #7E838E)', fontSize: '14px', fontWeight: '500', letterSpacing: '0.16px' }}>BTC</span>
                      </div>
                    </div>
                  </td>
                  <td>Stock 1</td>
                  <td>Simple-long</td>
                  <td className="d-flex justify-content-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967Z" fill="#A9B0BA"/>
                    </svg> 
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td className="d-flex flex-row px-0">
                    <div className="px-0" href="#">
                      <img
                        className="user-avatar rounded-circle mr-2"
                        src={require("./../../images/avatars/Ethereum.png")}
                        alt="Ethereum"
                       
                      />
                    </div>
                    <div className="">
                      <div className="d-flex flex-column mr-2 px-2" href="#">
                        <span className="" style={{ fontSize: '18px', letterSpacing: '0.2px', fontWeight: '600', color: 'var(--black, #1D2226)' }}>Ethereum</span>
                        <span style={{ color: 'var(--grey, #7E838E)', fontSize: '14px', fontWeight: '500', letterSpacing: '0.16px' }}>ETH</span>
                      </div>
                    </div>
                  </td>
                  <td>Stock 1</td>
                  <td>Simple-short</td>
                  <td className="d-flex justify-content-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967Z" fill="#A9B0BA"/>
                    </svg> 
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td className="d-flex flex-row px-0">
                    <div className="px-0" href="#">
                      <img
                        className="user-avatar rounded-circle mr-2"
                        src={require("./../../images/avatars/Solana.png")}
                        alt="Bitcoin"
                       
                      />
                    </div>
                    <div className="">
                      <div className="d-flex flex-column mr-2 px-2" href="#">
                        <span className="" style={{ fontSize: '18px', letterSpacing: '0.2px', fontWeight: '600', color: 'var(--black, #1D2226)' }}>Solana</span>
                        <span style={{ color: 'var(--grey, #7E838E)', fontSize: '14px', fontWeight: '500', letterSpacing: '0.16px' }}>SOL</span>
                      </div>
                    </div>
                  </td>
                  <td>Stock 1</td>
                  <td>Simple-long</td>
                  <td className="d-flex justify-content-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967Z" fill="#A9B0BA"/>
                    </svg> 
                  </td>
                  
                </tr>
                <tr>
                  <td>4.</td>
                  <td className="d-flex flex-row px-0">
                    <div className="px-0" href="#">
                      <img
                        className="user-avatar rounded-circle mr-2"
                        src={require("./../../images/avatars/Solana.png")}
                        alt="Solana"
                       
                      />
                    </div>
                    <div className="">
                      <div className="d-flex flex-column mr-2 px-2" href="#">
                        <span className="" style={{ fontSize: '18px', letterSpacing: '0.2px', fontWeight: '600', color: 'var(--black, #1D2226)' }}>Solana</span>
                        <span style={{ color: 'var(--grey, #7E838E)', fontSize: '14px', fontWeight: '500', letterSpacing: '0.16px' }}>SOL</span>
                      </div>
                    </div>
                  </td>
                  <td>Stock 1</td>
                  <td>Simple-short</td>
                  <td className="d-flex justify-content-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967Z" fill="#A9B0BA"/>
                    </svg> 
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td className="d-flex flex-row px-0">
                    <div className="px-0" href="#">
                      <img
                        className="user-avatar rounded-circle mr-2"
                        src={require("./../../images/avatars/Ethereum.png")}
                        alt="Bitcoin"
                       
                      />
                    </div>
                    <div className="">
                      <div className="d-flex flex-column mr-2 px-2" href="#">
                        <span className="" style={{ fontSize: '18px', letterSpacing: '0.2px', fontWeight: '600', color: 'var(--black, #1D2226)' }}>Ethereum</span>
                        <span style={{ color: 'var(--grey, #7E838E)', fontSize: '14px', fontWeight: '500', letterSpacing: '0.16px' }}>ETH</span>
                      </div>
                    </div>
                  </td>
                  <td>Stock 1</td>
                  <td>Simple-long</td>
                  <td className="d-flex justify-content-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967Z" fill="#A9B0BA"/>
                    </svg> 
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td className="d-flex flex-row px-0">
                    <div className="px-0" href="#">
                      <img
                        className="user-avatar rounded-circle mr-2"
                        src={require("./../../images/avatars/Bitcoin.png")}
                        alt="Bitcoin"
                       
                      />
                    </div>
                    <div className="">
                      <div className="d-flex flex-column mr-2 px-2" href="#">
                        <span className="" style={{ fontSize: '18px', letterSpacing: '0.2px', fontWeight: '600', color: 'var(--black, #1D2226)' }}>Bitcoin</span>
                        <span style={{ color: 'var(--grey, #7E838E)', fontSize: '14px', fontWeight: '500', letterSpacing: '0.16px' }}>BTC</span>
                      </div>
                    </div>
                  </td>
                  <td>Stock 1</td>
                  <td>Simple-long</td>
                  <td className="d-flex justify-content-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967Z" fill="#A9B0BA"/>
                    </svg> 
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="pagination d-flex justify-content-end">
              <img 
                src={require("../../images/avatars/pagination.png")}
                alt="pagination"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
);

CoinTable.propTypes = {
  title: PropTypes.string,
};

export default CoinTable;



