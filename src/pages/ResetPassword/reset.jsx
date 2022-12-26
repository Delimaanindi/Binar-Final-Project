import React from 'react'
import Form from 'react-bootstrap/Form'
import './reset.css'
import ResetHandler from './resetHandler'
import Car from '../../assets/image/img_car.png'

export default function Reset(submit) {

    // const navigate = useNavigate();
    const {values, Errors, reset, handleChange, handleCancel, handleReset, Done} = ResetHandler(submit)
    
    return(
        <div>
            <div className='reset-intro'>
            <h1>Binar Car Rental</h1>
            <h4><b>Best Car Rental for Any Kind of Trip in Your Area!</b></h4>
            <img src={Car} alt="Car" id='car-reset'/>
                </div>
            <section className="Reset">
              {Object.keys(Errors).length === 0 && reset ? (<div className='reset-inform'>
                  <h3>An instruction has been sent to your email!</h3>
                  <div className='buttons2'>
                      <button className='resend'>Resend Email</button>
                      <button className='done' onClick={Done}>Done</button>
                  </div>
              </div>) : 
              "" 
              }
            <Form className='reset-form'>
            <h1>Reset Password</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='labels-res'>Email address</Form.Label>
        <Form.Control 
        className ="inputs-res"
        onChange={handleChange} 
        type="email" 
        placeholder="Enter email"
        value={values.email} 
        name="email"/>
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      {Errors.email && (<div id='error'>* {Errors.email}</div>)}
      <div className='buttons'>
      <button id='reset' onClick={handleReset}>
        Reset my password
      </button>
      <button id='cancel' onClick={handleCancel}>
        Cancel
      </button>
      </div>  
    </Form>
            </section>
            
        </div>
    )
}