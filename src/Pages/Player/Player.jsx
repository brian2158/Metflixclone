
import './Player.css'
import back_arrow_icon from '../../assets/assets/back_arrow_icon.png'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
 
  const {id} = useParams();
  const navigate = useNavigate();
  
  const [apiData,setApiData] = useState({
    name:'',
    key:"",
    published_at:'',
    type:""
  })
 
 

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDQ4ZTQ3YmZjZTVlYzMwMTRkMzMxOTMxODQ0OGYwNiIsIm5iZiI6MTcyMTEzOTk0NC45MjQwMTYsInN1YiI6IjY2OTY4MTc5OWU0MWMyZWEwMDA5NmYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.145zwCewLPcVNnqiedqLvRA9TlEVuuBNXt2EHs3TaIA'
    }
  };


useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
})



  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="background" onClick={()=>{navigate(-2)}} />
      <iframe 
      width="90% 
      "height="90%" 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player