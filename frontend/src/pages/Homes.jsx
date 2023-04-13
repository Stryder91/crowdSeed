import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { path_getHomes } from "../data/routes";
import { HomeCard } from "../components/cards/HomeCard";

export const Homes = () => {
  const navigate = useNavigate();
  const [homes, setHomes] = useState([]);
  const { pathname, hash, key } = useLocation();

  useEffect(async () => {
    const res = await axios.get(path_getHomes);
    setHomes(res.data);
  }, []);

  const _navigateToHome = (id) => {
    navigate(`${id}`);
    // dispatch to redux
  }

	console.log("homes", homes);
  return(
    <div className="text-center">
      <h1>Select a home</h1>
      <div className="matches">
        <div className="flex m-auto"> 
					{homes && homes.map((st, i) => {
						return <HomeCard 
              id={st._id}
							name={st.name}
							description={st.name}
							amountToRaise={st.amountToRaise}
              amountRaised={st.amountRaised}
							key={i} 
						/>
					})}
				 </div>
      </div>
    </div>
  );
}