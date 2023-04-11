import React from 'react'
import { IconContext } from 'react-icons';
import { RiInstagramFill } from 'react-icons/ri';
import { BsTwitter } from 'react-icons/bs';
import { RiTwitchFill } from 'react-icons/ri';
import { SiDiscord } from 'react-icons/si';
import icon from '../assets/jax_icon.png';

export default function Footer() {
  return (
    <div id='footer'>
      <div id="socials">
        <a href="https://twitter.com/Jaxs_lottery" target="_blank">
          <IconContext.Provider value={{ color: '#FB3640', size: '1.75rem' }}>
            <BsTwitter />
          </IconContext.Provider>
        </a>
        <a href="#" style={{ cursor: "not-allowed" }}>
          <IconContext.Provider value={{ color: '#FB3640', size: '1.75rem' }}>
            <SiDiscord />
          </IconContext.Provider>
        </a>
        <img src={icon} alt="jax-icon" />
        <a href="#" style={{ cursor: "not-allowed" }}>
          <IconContext.Provider value={{ color: '#FB3640', size: '1.75rem' }}>
            <RiTwitchFill />
          </IconContext.Provider>
        </a>
        <a href="#" style={{ cursor: "not-allowed" }}>
          <IconContext.Provider value={{ color: '#FB3640', size: '1.75rem' }}>
            <RiInstagramFill />
          </IconContext.Provider>
        </a>
      </div>
      <p>2022 Jax’s lottery. All rights reserved</p>
    </div>
  )
}
