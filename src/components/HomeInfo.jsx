import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox=({text,link,btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>{btnText}
        <img src={arrow} className='w-4 h-4 object-contain'></img></Link>
    </div>
)

const renderContent={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hello,this is <span className='font-semibold'>Surekha</span>
            <br />
            Have a Great Day
            </h1>
    ),
    2:(
        <InfoBox
         text="A dedicated Front-End Developer ,passionate about web designing and developing and skilled in Front End tech stacks"
         link="/about"
         btnText="Learn More ">
        </InfoBox>
    ),
    3:(
        <InfoBox
         text="Completed some practice assignments using videos from YouTube, online courses and Internships"
         link="/projects"
         btnText="Visit My Portfolio">
        </InfoBox>
    ),
    4:(
        <InfoBox
        text="If You need assistance on completing a project please feel free to reach out and ask any time."
        link="/contact"
        btnText="Contact Me">
        </InfoBox>
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
