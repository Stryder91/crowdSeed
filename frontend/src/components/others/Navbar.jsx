import React, {useState} from 'react';

import { IconContext } from 'react-icons';
import {RiInstagramFill} from 'react-icons/ri';
import {BsTwitter} from 'react-icons/bs';
import {RiTwitchFill} from 'react-icons/ri';
import {SiDiscord} from 'react-icons/si';
import icon from '../assets/jax_icon.png';
import { getAccount, sliceAcc } from '../utils/ethers';

export default function Navbar() {
  const [navState, setNavstate] = useState(false);
  const [acc, setAcc] = useState(null);

  const _connectWallet = async () => {
    const acc = await getAccount();
    setAcc(sliceAcc(acc));
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <a href="#">
            <img src={icon} alt="icon"/>
          </a>
        </div>
      </div>
      <div className="links-container">
        <ul className="links">
          <li>
            <a href="#hero">Concept</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#FAQ">F.A.Q</a>
          </li>
        </ul>
      </div>
      <div className="socials-container">
        <ul className="icons">
          <li>
            <a href="https://twitter.com/Jaxs_lottery" target="_blank">
              <IconContext.Provider value={{color: '#fff',size:'1.75rem'}}>
                <BsTwitter/>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="#" style={{cursor: "not-allowed"}}>
              <IconContext.Provider value={{color: '#fff',size:'1.75rem'}}>
                <SiDiscord/>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="#" style={{cursor: "not-allowed"}}>
              <IconContext.Provider value={{color: '#fff',size:'1.75rem'}}>
                <RiTwitchFill/>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="#" style={{cursor: "not-allowed"}}>
              <IconContext.Provider value={{color: '#fff',size:'1.75rem'}}>
                <RiInstagramFill/>
              </IconContext.Provider>
            </a>
          </li>
        </ul>
      </div>
      <div className="wallet-container">
        <button onClick={_connectWallet}>
          {!acc ? "Connect Wallet" : acc}
        </button>
      </div>
    </nav>
  )
}
