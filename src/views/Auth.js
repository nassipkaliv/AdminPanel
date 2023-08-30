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

const Auth = ({ }) => (
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
      <h1 style={{ color: 'var(--black, #1D2226)', textAlign: 'center' }}>Вход</h1>
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
            <div className="d-flex justify-content-between align-items-center">
              <h3 style={{ color: 'var(--light-grey, #A9B0BA)'}}>Пароль</h3>
              <Link to="auth-forgot-pass">
                <h3 style={{ color: 'var(--pimary-blue, #1877EE)'}}>
                  Забыли пароль?
                </h3>
              </Link>
            </div>
            <InputGroup seamless className="mb-3">
      <FormInput
        type="password"
        onChange={() => {}}
      />
      <InputGroupAddon type="append">
        <InputGroupText>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213" stroke="#A9B0BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
      </Form>
    </CardBody>

    <CardFooter>
      <Link to="/user-profile-lite">  
        <Button outline className="w-100" style={{ borderRadius: '10px', fontSize: '19px', fontWeight: '600', lineHeight: '140%'}}>
          Войти
        </Button>
      </Link>
    </CardFooter>
  </Card>
  </div>
);


export default Auth;
