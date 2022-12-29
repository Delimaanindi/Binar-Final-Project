
import Notifcard from "./notifcard"
import React from "react"
import './notification.css'

const data = [
    {id:1,
     date: "12/12/2022",
     timestamp: "09.00",
     title: "New Year Promos!",
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae?"},
    {id:2,
     date: "13/12/2022",
     timestamp: "11.00",
     title: "Here are our best drivers!",
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae?"},
    {id:3,
     date: "14/12/2022",
     timestamp: "13.00",
     title: "Check out your rent vouchers!",
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae?"}
]

export default function Notification() {
    return(
        <>
        <div className="card-con">
            {data.map((item) => (
                <Notifcard 
                key={item.id}
                date={item.date}
                timestamp={item.timestamp}
                title={item.title}
                text={item.text}/>
            ))}
            </div>
        </>
    )
}