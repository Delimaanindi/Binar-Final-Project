import Validate from "./validation";
import { Inuser } from "../localstore/localstore";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";

export default function Handlebutton(submit, params) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmited] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  var axiosConfig = {
    method: "post",
    url: `${process.env.REACT_APP_BASE_URL}/customer/auth/login`,
    headers: {
      Content: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      ...values,
    }),
  };

  const signin = async () => {
    axios(axiosConfig)
      .then(function (response) {
        Inuser(JSON.stringify(response.data));
        if (params.redirectFrom) {
          navigate("/cars");
        } else navigate("/");
      })
      .catch((e) => {
        if (e.response.status >= 400) {
          let status = {
            ...values,
            status: e.response.status,
          };
          setErrors(Validate(status));
        }
      });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validate(values));
    setSubmited(true);
    signin();
  };

  //   const rentClick = (e) => {
  //     e.preventDefault();
  //     navigate("/");
  //     setLoggedin(true);
  //   };
  const logout = (e) => {
    e.preventDefault();
    navigate("/login");
    localStorage.clear();
    Cookies.remove("isRegis", { path: "/" });
    setLoggedin(false);
  };

  return {
    handleChange,
    handleSubmit,
    logout,
    values,
    errors,
    submitted,
    loggedin,
  };
}
