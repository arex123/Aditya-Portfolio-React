import React from 'react'
import '../styles/Cards.css'
import Title from 'react-vanilla-tilt'

const Cards = (props) => {

  return (
    <div className='cards_cont'>
      <Title className="titl"><div className='project_card'><img src={props.pic} alt="Project"/></div></Title>
    </div>
  )
}

export default Cards