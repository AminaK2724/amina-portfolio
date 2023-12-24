import React from 'react'
import '/Users/aminakhan/Desktop/amina-portfolio/front-end/src/styles/header.css'

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#links">Links</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
