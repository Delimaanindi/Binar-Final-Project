import React, {useState} from "react";
import "./index.css";
import { Alert } from "react-bootstrap";
import SignImage from "../../assets/image/sign-in.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Handlebutton from "../../components/LoginLogic/handlebutton";
import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import Cookies from "js-cookie";
import {BsEyeSlashFill,BsEyeFill} from 'react-icons/bs'

const PublicLogin = (submit) => {
  const isRegis = Cookies.get("isRegis");
  const location = useLocation();
  const queries = queryString.parse(location.search);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  
  const resetHandling = (e) => {
      e.preventDefault();
      navigate('/resetpassword')
  }
  const showHandler = () => {
    setShow(show => !show)
  } 
  const { handleChange, handleSubmit, errors, values, submitted } =
    Handlebutton(submit, queries);
  return (
    <section className="sign-section">
      <div className="sign-form">
        {isRegis && (
          <div className="status-error">
            <Alert variant="success" style={{ textAlign: "center" }}>
              Registration Success! Please login.
            </Alert>
          </div>
        )}
        {errors.status && (
          <div className="status-error">
            <Alert variant="danger" style={{ textAlign: "center" }}>
              {errors.status}
            </Alert>
          </div>
        )}
        <div className="square"></div>
        <h1>Welcome Back!</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>{" "}
            {errors.email && (
              <span style={{ color: "red" }}>&#42;{errors.email}</span>
            )}
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              onChange={handleChange}
              value={values.email}
              name="email"
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>{" "}
            {errors.password && (
              <span style={{ color: "red" }}>&#42;{errors.password}</span>
            )}
            <Form.Control
              type={show ? "text" : "password"}
              placeholder="6+ Password"
              onChange={handleChange}
              value={values.password}
              name="password"
            />
            <span id="eyecon" onClick={showHandler}>{show ? <BsEyeSlashFill size={25}/> : <BsEyeFill size={25}/>}</span>
          </Form.Group>
          <p id="forgot" onClick={resetHandling}>Forgot Password?</p>
          <div className="d-grid gap-2">
            {!submitted && (
              <Button
                variant="primary"
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            )}
            {submitted && (
              <Button
                variant="primary"
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            )}
          </div>
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/register" className="sign-link">
              Sign Up for free
            </Link>
          </p>
        </Form>
      </div>
      <img src={SignImage} alt="sign-img" className="sign-img" />
    </section>
  );
};

export default PublicLogin;
