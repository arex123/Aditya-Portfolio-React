import React from 'react'
import P1 from '../assets/card_pic.webp'
import P2 from '../assets/vectors/project2_pic.webp'
import '../styles/Cards.css'
import Title from 'react-vanilla-tilt'

const Cards = (props) => {

  return (
    <div className='cards_cont'>
      <Title className="titl"><div className='project_card'><img src={props.pic}/></div></Title>
    </div>
  )
}

export default Cards