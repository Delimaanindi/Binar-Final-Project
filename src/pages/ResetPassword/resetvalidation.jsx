
export default function Resetvalid(values) {
    let errors = {};

    if(!values.email) {
        errors.email = "Please enter your email"
    }else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid"
    }

    return errors;
}
