import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { path_getStartups } from "../data/routes";
import { StartupCard } from "../components/cards/StartupCard";

export const Startups = () => {
  const navigate = useNavigate();
  const [startups, setStartups] = useState([]);
  const { pathname, hash, key } = useLocation();

  useEffect(async () => {
    const res = await axios.get(path_getStartups);
    setStartups(res.data);
  }, []);

  const _navigateToStartup = (id) => {
    navigate(`${id}`);
    // dispatch to redux
  }

	console.log("startups", startups);
  return(
    <div className="text-center">
      <h1>Select a startup</h1>
      <div className="matches">
        <div className="w-3/4 flex m-auto"> 
					{startups && startups.map((st, i) => {
						return <StartupCard 
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