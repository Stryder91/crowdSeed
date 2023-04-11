import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getAccount } from "../blockchain/ethers";
import { path_getUser } from "../data/routes";
import { isEmpty } from '../utils/helpers/validators';

export const Profile = () => {

  const [accToDisplay, setAccToDisplay] = useState("");
  const [userInfos, setUserInfos] = useState({});
  const [errorInfos, displayError] = useState('');

  useEffect(async () => {
    const acc = await getAccount(true);
    if (acc){
      setAccToDisplay(acc);
    } 
  }, [accToDisplay]);
  
  useEffect(async () => {
    if (accToDisplay && accToDisplay.length > 0) {
      const res = await axios.get(path_getUser, {params: {wallet: accToDisplay}});
      if (res.data.user && res.data.user.length === 1) {
        setUserInfos(res.data);
      } else {
        displayError("You don't have an account link to your wallet.")
      }

      console.log("accToDisplay", res);
    }
  }, [accToDisplay]);


  console.log("userInfos", userInfos);
  return(<div>
    { accToDisplay 
    ? <h2>Wallet : {accToDisplay && accToDisplay}</h2>
    : <h2>Connect a wallet</h2>
    }
    {/* READ ALL created products */}
    <div>
      { userInfos && !isEmpty(userInfos)
      ? <p>I have an account</p>
      : <p>{errorInfos}</p>
      }
    </div>
  </div>);
} 