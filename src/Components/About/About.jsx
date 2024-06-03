import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit hic nihil harum deserunt accusamus cupiditate inventore alias, vel velit qui voluptatibus porro repudiandae doloremque tempore impedit corrupti saepe fugiat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur sint amet dolorum labore ipsum molestiae quidem nihil, dicta aut magni. Harum itaque vitae, doloribus asperiores iure aut iste dolor!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis exercitationem dicta ut explicabo. Facere dignissimos accusantium accusamus sed hic enim quas ea earum, ab, adipisci suscipit repellendus reiciendis ullam!</p>
      </div>
    </div>
  )
}

export default About
