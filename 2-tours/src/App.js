import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const remove = id => {
    const newTour = tours.filter((tour)=>  tour.id !==id)
    setTours(newTour)
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
    // console.log(tours)
    // setLoading(false);

  }
  useEffect(()=> {
    fetchTours()
  }, [])

  if(tours.length===0)
{
  return <main>
    <div className="title">
      <h2>No tours left</h2>
      <button className="btn" onClick={fetchTours}>
        Refresh
      </button>
    </div>
  </main>
}

  if(loading){
    return (

    <main>

    <Loading />
    </main>
    )
  }
  return (
    <main>
      <Tour tours={tours} remove={remove} />
    </main>
  )
}

export default App
