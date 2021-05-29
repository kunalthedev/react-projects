import React from 'react';
import Tours from './Tours';

const Tour = ({tours, remove}) => {
  // console.log(tours)
  return (
    <section>
      <div className='title'>
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour)=>{
          return <Tours key={tour.id} {...tour} remove={remove}></Tours>
        })}
      </div>
    </section>
  )
};

export default Tour;
