import Navbar from '../../Components/Navbar/Navbar.jsx'
import './Home.css'
import hero_banner from '../../assets/assets/hero_banner.jpg'
import hero_title from '../../assets/assets/hero_title.png'
import play_icon from '../../assets/assets/play_icon.png'
import info_icon from '../../assets/assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order,
             a young man living in a modern Istabul embarks on a quest to save the city
              from an immortal enemy</p>
              <div className="hero-btns">
                <button className='btn'><img src={play_icon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
              </div>
              <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
         <TitleCards category={"top_rated"} title={"Blockbuster Movies"}/> 
        <TitleCards category={"popular"} title={"Only on Netflix"} /> 
         <TitleCards category={"upcoming"}  title={"Upcoming"} /> 
         <TitleCards category={"now_playing"} title={"Top Pics for You"} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
