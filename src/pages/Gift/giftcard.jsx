import React, {useState} from "react";
import './giftcard.css'

export default function Giftcards(props) {
    const {title, discount, text, validdate} = props;
    const [claimed, setClaimed] = useState(false);

    const claimHandler = () => {
        setClaimed(true);
    }

    return(
        <>
        {claimed ? (<div className="card-contain">
            <p id="claimed">Voucher claimed!</p>
        </div>) :
        (
            <div className="card-contain">
            <div className="v-card">
                <h5 id="titles">{title}</h5>
                <h5 id="discount">{discount}</h5>
                <p>Valid until: {validdate}</p>
            </div>
            <div className="fortext">
            <p id="text">{text}</p>
            </div>
        </div>
        )}
        {claimed ? (null
        ) : (<button id="claim-btn" onClick={claimHandler}>Claim</button>)}
        
        </>
    )
}