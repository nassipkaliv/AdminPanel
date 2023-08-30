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

import { Link } from "react-router-dom";

const FinanceComissionsTable = ({ title }) => (
  
  <Row className="">
      <Col lg={9}>
        <Card small className="mb-4">
          <CardBody className="p-0 pb-3">
            <table table className="table mb-4 py-4 px-2">
              <thead className="">
                <tr style={{ color: 'var(--light-grey, #A9B0BA)'}}>
                  <th scope="col" className="">
                    
                  </th>
                  <th scope="col" className="">
                    Date
                    <img 
                      src={require("../../images/avatars/upend.png")}
                      alt="upend"
                      className="ml-1"
                    />
                  </th>
                  <th scope="col" className="">
                    Client
                    <img 
                      src={require("../../images/avatars/upend.png")}
                      alt="upend"
                      className="ml-1"
                    />
                  </th>
                  <th scope="col" className="">
                    Amount
                    <img 
                      src={require("../../images/avatars/upend.png")}
                      alt="upend"
                      className="ml-1"
                    />
                  </th>
                  <th scope="col" className="d-flex justify-content-end" >
                    Taken
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td className="">
                    20.08.2023
                  </td>
                  <td>0x53685aaabbb</td>
                  <td>$130</td>
                  <td className="d-flex justify-content-end">
                    <Button style={{  fontSize:'19px', fontWeight: '500'}}>Take</Button> 
                  </td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td className="">
                    20.08.2023
                  </td>
                  <td>0x53685aaabbb</td>
                  <td>$130</td>
                  <td className="d-flex justify-content-end">
                    <Button style={{ background: 'none', border: 'none', color: 'var(--light-grey, #A9B0BA)', fontSize:'19px', fontWeight: '600'}}>Taken</Button> 
                  </td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td className="">
                    20.08.2023
                  </td>
                  <td>0x53685aaabbb</td>
                  <td>$130</td>
                  <td className="d-flex justify-content-end">
                    <Button style= {{  fontSize:'19px', fontWeight: '500'}}>Take</Button> 
                  </td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td className="">
                    20.08.2023
                  </td>
                  <td>0x53685aaabbb</td>
                  <td>$130</td>
                  <td className="d-flex justify-content-end">
                    <Button style={{  fontSize:'19px', fontWeight: '500'}}>Take</Button> 
                  </td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td className="">
                    20.08.2023
                  </td>
                  <td>0x53685aaabbb</td>
                  <td>$130</td>
                  <td className="d-flex justify-content-end">
                    <Button style={{  fontSize:'19px', fontWeight: '500'}}>Take</Button> 
                  </td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td className="">
                    20.08.2023
                  </td>
                  <td>0x53685aaabbb</td>
                  <td>$130</td>
                  <td className="d-flex justify-content-end">
                    <Button style={{  fontSize:'19px', fontWeight: '500'}}>Take</Button> 
                  </td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td className="">
                    20.08.2023
                  </td>
                  <td>0x53685aaabbb</td>
                  <td>$130</td>
                  <td className="d-flex justify-content-end">
                    <Button style={{  fontSize:'19px', fontWeight: '500'}}>Take</Button> 
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="pagination d-flex justify-content-end">
            <Link to="/finance">
              <img 
                src={require("../../images/avatars/pagination5.png")}
                alt="pagination"
              />
            </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
);



export default FinanceComissionsTable;



