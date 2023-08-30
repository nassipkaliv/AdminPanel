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
  Button
} from "shards-react";
import { Link } from "react-router-dom"

const AuthForgotPass = ({ }) => (
  <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Set the minimum height of the container to the viewport height
      }}
    >
  <Card small className="my-4 mx-4" style={{ width: "636px" }}>
    <CardHeader>
      <h1 style={{ color: 'var(--black, #1D2226)', textAlign: 'center' }}>Forecast dialog</h1>
      <p style={{ color: 'var(--light-grey, #A9B0BA)', fontSize: '16px', textAlign: 'center' }}>Lorem Ipsum - это текст-"рыба", часто используемый в печати</p>
    </CardHeader>
    <CardBody>
      <Form>
        <FormGroup>
            <h3 style={{ color: 'var(--light-grey, #A9B0BA)'}}>Email</h3>
          <FormInput 
          style={{ background: 'var(--light-bg-elements, #F4F5F7)' }}
          id="username"
          placeholder="Enter"
           />
        </FormGroup>
      </Form>
    </CardBody>

    <CardFooter>
      <Link to="/user-profile-lite">  
        <Button className="w-100 mb-2" style={{ borderRadius: '10px', fontSize: '19px', fontWeight: '600', lineHeight: '140%'}}>
          Send
        </Button>
      </Link>
      <Button outline className="w-100" style={{ borderRadius: '10px', fontSize: '19px', fontWeight: '600', lineHeight: '140%'}}>
          Войти
        </Button>
    </CardFooter>
  </Card>
  </div>
);


export default AuthForgotPass;
