import React, {useState} from "react";
import './index.css'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'


const faqData = [
    {question: 'Apa saja syarat yang dibutuhkan?',
     answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }, 
    {question: 'Berapa hari minimal sewa mobil lepas kunci?', 
     answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {question: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?', 
     answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }, 
    {question: 'Apakah Ada biaya antar-jemput?', 
     answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }, 
    {question: 'Bagaimana jika terjadi kecelakaan', 
     answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
]

export default function Faq() {
    const [accordion, setAccordion] = useState(null);

    const toggleHandling = (index) => {
        if(accordion === index) {
            return setAccordion(null)
        }
        setAccordion(index);
    }

    return(
        <div>
            <section className="faq-section" id="faq">
                <div className="faq-title">
                    <h1><b>Frequently Asked Question</b></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum?</p>
                </div>
                <div className="faq-list">
                    {faqData.map((item, index) => 
                        <>
                        <div key={index} className={accordion === index ? "questions-active"  : 'questions'} onClick={() => toggleHandling(index)}>
                            <h6 className="qtext">{item.question}</h6>
                            <span>
                                {accordion === index ? (<div className="toggle"><IoIosArrowUp size={28}/></div>) 
                                    : 
                                    (<div className="toggle"><IoIosArrowDown size={28}/></div>)}
                                    </span>     
                        </div>
                            <div className={accordion === index ? "answers-active" : "answer-nonac"}>
                                <p>{item.answer}</p>
                            </div>
                            </>
                    )}
                </div>
            </section>
        </div>
    )
}