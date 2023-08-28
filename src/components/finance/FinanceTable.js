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


const FinanceTable = ({ title }) => (
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
                    Tarif type
                    <img 
                      src={require("../../images/avatars/upend.png")}
                      alt="upend"
                      className="ml-1"
                    />
                  </th>
                  <th scope="col" className="">
                    Tarif
                    <img 
                      src={require("../../images/avatars/upend.png")}
                      alt="upend"
                      className="ml-1"
                    />
                  </th>
                  <th scope="col" className="">
                    Price
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
                  <td className="">
                    20.08.2023
                  </td>
                  <td style={{ color: 'var(--light-grey, #A9B0BA)'}}>Client</td>
                  <td>Professional (#9)</td>
                  <td>$30</td>
                  <td className="d-flex justify-content-end">
                    <Button>Moneyback</Button> 
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>
                    16.08.2023
                  </td>
                  <td style={{ color: 'var(--light-grey, #A9B0BA)'}}>Partner</td>
                  <td>Gold (#10137)</td>
                  <td>$250</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>
                    2.08.2023
                  </td>
                  <td style={{ color: 'var(--light-grey, #A9B0BA)'}}>Client</td>
                  <td>Professional (#9)</td>
                  <td>$1350</td>
                  <td className="d-flex justify-content-end">
                    
                  </td>
                  
                </tr>
                <tr>
                  <td>4.</td>
                  <td>
                    11.07.2023
                  </td>
                  <td style={{ color: 'var(--light-grey, #A9B0BA)'}}>Partner</td>
                  <td>Gold (#10137)</td>
                  <td>$30</td>
                  <td className="d-flex justify-content-end">
                    <Button>Moneyback</Button> 
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>
                    9.07.2023
                  </td>
                  <td style={{ color: 'var(--light-grey, #A9B0BA)'}}>Client</td>
                  <td>Professional (#9)</td>
                  <td>$250</td>
                  <td className="d-flex justify-content-end">
                    <Button>Moneyback</Button> 
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>
                    5.07.2023
                  </td>
                  <td style={{ color: 'var(--light-grey, #A9B0BA)'}}>Partner</td>
                  <td>Gold (#10137)</td>
                  <td>$11450</td>
                  <td className="d-flex justify-content-end">
                    
                  </td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>
                    2.07.2023
                  </td>
                  <td style={{ color: 'var(--light-grey, #A9B0BA)'}}>Partner</td>
                  <td>Professional (#9)</td>
                  <td>$30</td>
                  <td className="d-flex justify-content-end">
                    <Button>Moneyback</Button> 
                  </td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>
                    28.06.2023
                  </td>
                  <td style={{ color: 'var(--light-grey, #A9B0BA)'}}>Client</td>
                  <td>Goldl (#10137)</td>
                  <td>$30</td>
                  <td className="d-flex justify-content-end">
                    <Button>Moneyback</Button> 
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="pagination d-flex justify-content-end">
              <img 
                src={require("../../images/avatars/pagination5.png")}
                alt="pagination"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
);

FinanceTable.propTypes = {
  title: PropTypes.string,
};

export default FinanceTable;



