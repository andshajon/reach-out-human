import React from 'react'
import '../styles/SupportCard.css';
import YouthImage from "../assets/youth.png";


function SupportCard({image, text, subText}) {
  return (
    <div className='supportCard'>
       <img className="supportCard__image" src={image} />
       <div className='supportCard__textContainer'>
           <h2>{text}</h2>
           <p>{subText}</p>

       </div>



      
    </div>
  )
}

export default SupportCard