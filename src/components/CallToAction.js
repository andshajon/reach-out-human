import React from 'react'
import '../styles/CallToAction.css';
function CallToAction({color ,  text}) {
  return <a style={{backgroundColor: color , }}
  className ="callToAction" src="#">{text}</a>
    
  
}

export default CallToAction