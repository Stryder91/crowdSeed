import React from 'react'
import q1 from '../assets/q1.png'
import q2 from '../assets/q2.png'
import soon from '../assets/soon.png'

export default function Roadmap() {
  return (
    <div id='roadmap'>
      <div className="container">
        <p className="title">
          Roadmap
        </p>
        <div className='roadmap-container'>
          <div>
            <p>Q1 2022</p>
            <img src={q1} alt="q1_img" />
          </div>
          <div>
            <p>Q2 2022</p>
            <img src={q2} alt="q2_img" />
          </div>
          <div>
            <p>Soon...</p>
            <img src={soon} alt="soon_img" />
          </div>
        </div>
      </div>
    </div>
  )
}
