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
		console.log("res", res);
    setStartups(res.data);
  }, []);

  const _navigateToStartup = (id) => {
    navigate(`${id}`);
    // dispatch to redux
  }

	console.log("startups", startups);
  return(
    <div>
      <h1>Select an startup</h1>
      <div className="matches">
        <div className="w-3/4 flex m-auto"> 
					{startups && startups.map((st, i) => {
						return <StartupCard 
							name={st.name}
							description={st.name}
							amountToRaise={st.amountToRaise}
							key={i} 
						/>
					})}
				 </div>
      </div>
    </div>
  );
}