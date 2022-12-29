import React from "react";
import './notification.css'

export default function Notifcard(props) {
    const {date, title, text, timestamp} = props;

    return(
        <>
            <div className="cards">
            <div className="time-detail">
                <p>{date}</p>
                <p>{timestamp}</p>
            </div>
            <p id="title">{title}</p>
            <p>{text}</p>
            </div>  
        </>
    )
}