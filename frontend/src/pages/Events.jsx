import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { path_getEvents } from "../data/routes";
import { formatTimestamp } from "../utils/helpers/parsing";
import { CardEvent } from "../components/Card";
import { Tabs } from "../components/Tabs";

export const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const { pathname, hash, key } = useLocation();

  useEffect(async () => {
    const res = await axios.get(path_getEvents);
    setEvents(res.data.events);
  }, []);

  const _navigateToEvent = (id) => {
    navigate(`${id}`);

    // dispatch to redux
  }
  console.log("LTR", hash);
  return(
    <div>
      <h1>Select an event</h1>
      <div className="matches">
        <div className="w-3/4 m-auto"> <Tabs/> </div>
        {events && events.map((m, i) => {
          return <CardEvent 
            key={i} 
            eventId={m.eventId}
            name={m.name}
            dateStart={formatTimestamp(m.dateStart)}
            dsTimestamp={m.dateStart}
            dateEnd={formatTimestamp(m.dateEnd)}
            deTimestamp={m.dateEnd}
            prizePool={m.prizePool}
            numberOfTeams={m.numberOfTeams}
            title={m.name}
            location={m.location}
            navigate={_navigateToEvent}
            hashAnchor={hash ?? "#incoming"}
          />
        })}
      </div>
    </div>
  );
}