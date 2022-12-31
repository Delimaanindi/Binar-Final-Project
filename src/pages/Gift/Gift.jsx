import React from "react";
import Giftcards from "./giftcard";
import './giftcard.css'
import Car from '../../assets/image/img_car.png'

const data = [
    {id: 1, 
     title: "New Year Rent Discount!",
     discount: "50%",
     validdate: "10/01/2023", 
     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "},
     {id: 2,
      title: "New Year Rent Discount!",
      discount: "75%",
      validdate: "08/01/2023", 
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
]
export default function Gift() {
    return(
        <div className="gift-comp">
        <div className="gift-page">
            {data.map((item) => (
                <Giftcards
                key={item.id}
                title = {item.title}
                discount={item.discount}
                validdate={item.validdate}
                text ={item.text}/>
            ))}
            
        </div>
        <div className="Brand">
        <h6>BINAR CAR RENTAL</h6>
        <h4>The Best Car Rental in Your Area!</h4>
        <img src={Car} alt="car" />
        </div>
        
        </div>
    )

}