import { useState } from "react";
import Resetvalid from "./resetvalidation";
import { useNavigate } from "react-router-dom";

export default function ResetHandler(submit) {

    const navigate = useNavigate();
    const [Errors, setErrors] = useState({});
    const [reset, setReset] = useState(false);

    const [values, setValues] = useState({
        email:''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            values, [e.target.name]: e.target.value,
        })
        
}
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    const handleReset = (e) => {
        e.preventDefault();
        setErrors(Resetvalid(values));
        setReset(true);
    }

    const Done = () => {
        setReset(false);
        values.email = "";
      }

    return {values, Errors, reset, handleChange, handleCancel, handleReset, Done};

}