import  { useEffect, useRef, useState } from 'react';
import './TitleCards.css'
import { Link } from 'react-router-dom';





const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);
  console.log(apiData)
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDQ4ZTQ3YmZjZTVlYzMwMTRkMzMxOTMxODQ0OGYwNiIsIm5iZiI6MTcyMTEzOTk0NC45MjQwMTYsInN1YiI6IjY2OTY4MTc5OWU0MWMyZWEwMDA5NmYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.145zwCewLPcVNnqiedqLvRA9TlEVuuBNXt2EHs3TaIA'
    }
  };
  
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"popular"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
})

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY
    }


    useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel)
    },[]);



  return(
    <div className='title-cards'>
     <h2>{title ? title:"Popular on Netlix"}</h2>


      <div className="card-list" ref={cardsRef}>
       {apiData.map((card, index) =>{
        return <Link to={`/player/${card.id}`} key={index} className="card" >
          <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt=''/>
          
          <p>{card.original_title}</p>
        
        </Link>
       })}
      </div>
      
    </div>
  )
}

export default TitleCards
