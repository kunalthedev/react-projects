import React from 'react';

const List = ({birthdays}) => {
  return (
    <>
      {birthdays.map((data)=>{
        const {id, name, age, image} = data;
        return <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>

        </article>
      })}
    </>
  );
};

export default List;
