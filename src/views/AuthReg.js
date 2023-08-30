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
  FormCheckbox,
} from "shards-react";
import { Link } from "react-router-dom"

const AuthReg = ({ }) => (
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
      <h1 style={{ color: 'var(--black, #1D2226)', textAlign: 'center' }}>Регистрация</h1>
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
            </div>
            <InputGroup seamless className="mb-3">
      <FormInput
        type="password"
        onChange={() => {}}
        placeholder="Enter"
      />
      <InputGroupAddon type="append">
        <InputGroupText>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z" stroke="#A9B0BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z" stroke="#A9B0BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <FormGroup>
            <h3 style={{ color: 'var(--light-grey, #A9B0BA)'}}>ID спонсора</h3>
          <FormInput 
          style={{ background: 'var(--light-bg-elements, #F4F5F7)' }}
          id="username"
          placeholder="Enter"
           />
        </FormGroup>
      </Form>

      <FormCheckbox style={{ color: ' var(--light-grey, #A9B0BA)', fontSize: '14px', FontFace: 'SF Pro Display', fontWeight: '500'}}
          name="fruit"
        >
          Я принимаю условия <span style={{ color: 'var(--grey, #7E838E)',  fontSize: '14px', FontFace: 'SF Pro Display', fontWeight: '600'}}>Пользовательского соглашения и Политики конфиденциальности</span>
        </FormCheckbox>
        <FormCheckbox
          name="fruit"
          style={{ color: ' var(--light-grey, #A9B0BA)', fontSize: '14px', FontFace: 'SF Pro Display', fontWeight: '500'}}
        >
          Работа с кукисами
        </FormCheckbox>
        <FormCheckbox
        style={{ color: ' var(--light-grey, #A9B0BA)', fontSize: '14px', FontFace: 'SF Pro Display', fontWeight: '500'}}
          name="fruit"
        >
          Дисклеймер
        </FormCheckbox>
    </CardBody>

    <CardFooter>
      <Link to="/user-profile-lite">  
        <Button className="w-100 mb-3" style={{ borderRadius: '10px', fontSize: '19px', fontWeight: '600', lineHeight: '140%'}}>
          Зарегистрироваться
        </Button>
      </Link>
      <Link to="/user-profile-lite">  
        <Button outline className="w-100" style={{ borderRadius: '10px', fontSize: '19px', fontWeight: '600', lineHeight: '140%'}}>
          Войти
        </Button>
      </Link>
    </CardFooter>
  </Card>
  </div>
);


export default AuthReg;
