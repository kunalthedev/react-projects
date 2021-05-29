import React, { useState } from 'react';
// import Tour from './Tour';
const Tours = ({id,image,info,price,name, remove}) => {
  const [readmore, setReadMore]= useState(false);
  return(
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>
            {name}
          </h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readmore? info : `${info.substring(0,200)}...`}</p>
        <button onClick={() => setReadMore(!readmore)}>{readmore? "show less" : "show more " }</button>
        <button className="delete-btn" onClick={()=> remove(id)}>Not Intrested</button>
      </footer>
    </article>
  )
};

export default Tours;
