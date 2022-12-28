import React, {useState} from "react";
import "./index.css";
import SignImage from "../../assets/image/sign-in.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Handlebutton from "../../components/registerlogic/Handlebutton";
import {BsEyeSlashFill,BsEyeFill} from 'react-icons/bs'

const PublicRegister = (submitForm) => {
  const { handleChange, handleSubmit, errors, value, submitted } =
    Handlebutton(submitForm);

    const [hidden, setHidden] = useState(false);
    const [text, setText] = useState(false);

    const eyeHandler = () => {
      setHidden(hide => !hide);
    }

    const eyeHandler2 = () => {
      setText(text => !text)
    }

  return (
    <section className="sign-section">
      <div className="sign-form">
        {errors.status && (
          <div className="status-error">
            <Alert variant="danger" style={{ textAlign: "center" }}>
              {errors.status}
            </Alert>
          </div>
        )}
        <div className="square"></div>
        <h1>Sign Up</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>{" "}
            {errors.email && (
              <span style={{ color: "red" }}>&#42;{errors.email}</span>
            )}
            <Form.Control
              data-testid="form1"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              value={value.email}
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Create Password</Form.Label>{" "}
            {errors.password1 && (
              <span style={{ color: "red" }}>&#42;{errors.password1}</span>
            )}
            <Form.Control
              type={text ? "text" : "password"}
              placeholder="6+ Password"
              name="password1"
              value={value.password1}
              onChange={handleChange}
            />
            <span id="eyecon2" onClick={eyeHandler2}>{text ? <BsEyeSlashFill size={25}/> : <BsEyeFill size={25}/>}</span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>{" "}
            {errors.password2 && (
              <span style={{ color: "red" }}>&#42;{errors.password2}</span>
            )}
            <Form.Control
              type={hidden ? "text" : "password"}
              placeholder="6+ Password"
              name="password2"
              value={value.password2}
              onChange={handleChange}
            />
            <span id="eyecon2" onClick={eyeHandler}>{hidden ? <BsEyeSlashFill size={25}/> : <BsEyeFill size={25}/>}</span>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              type="submit"
              className="btn-submit"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="sign-link">
              Sign In here
            </Link>
          </p>
        </Form>
      </div>
      <img src={SignImage} alt="sign-img" className="sign-img" />
    </section>
  );
};

export default PublicRegister;
