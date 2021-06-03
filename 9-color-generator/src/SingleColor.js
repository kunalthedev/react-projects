import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index, hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`
    
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    },3000)
    return ()=> clearTimeout(timeout)
  },[alert])
  return <article className={`color ${index>10 && 'color-light'}`} 
  onClick={()=>{
    setAlert(true);
    navigator.clipboard.writeText(hexValue)
  }}
  style={{backgroundColor: `rgb(${bcg})`}}>
  <p className="percent-value">{weight}%</p>
  <p className="color-value"> {hexValue} </p>
  {alert && <p className="alert">Copied to Clipboard</p>}
  </article>
}

export default SingleColor