import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import { path_getHomes } from "../data/routes";
import { HomeCard } from "../components/cards/HomeCard";
import { Filter } from "../components/Filter";
import { Context } from "../utils/Context";

export const Homes = () => {
  const { t } = useTranslation();
  const {state, dispatch} = useContext(Context);

  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [homes, setHomes] = useState([]);
  const { pathname, hash, key } = useLocation();

  useEffect(async () => {
    const res = await axios.get(path_getHomes);
    console.log("res", res);
    setHomes(res.data);
    dispatch({ type: 'SET_NUMBER_HOUSING', payload: res.data.length });
  }, []);

  const _navigateToHome = (id) => {
    navigate(`${id}`);
    // dispatch to redux
  }

  const renderHomes = homes && homes.map(h => <HomeCard 
    key={h._id}
    housing={h}
  />);

	// console.log("user, isAuthenticated, isLoading", user, isAuthenticated, isLoading, homes);
  return(
    <div className="text-center">
      <div >
        <Filter list={homes} handler={setHomes}/>
        <div className="flex flex-wrap m-auto"> 
          {isAuthenticated && renderHomes}
        </div>
      </div>
    </div>
  );
}