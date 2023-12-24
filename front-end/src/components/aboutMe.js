import React from 'react'
import '../styles/generalStyles.css'
import '../styles/aboutMe.css'
import Header from '../components/navigation/header.js'
import Clock from '../components/clock.js'

function aboutMe() {
  return (
    <div className="background">
      <div className="about-me-container">
        <Header />
        <Clock/>
      </div>
    </div>
  )
}

export default aboutMe
