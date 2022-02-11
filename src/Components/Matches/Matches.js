import React, { useEffect, useState } from "react";

const Matches = () => {
  const [leagueName, setLeagueName] = useState([]);
  const [date, setDate] = useState("");

  const fetchData = () => {
    fetch(`http://api.football-data.org/v2/matches?status=SCHEDULED`, {
      headers: { "X-Auth-Token": "b19d4dbb617647f5a3fac0df525b5c83" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLeagueName(data.matches);
        setDate(data.filters.dateFrom);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Today</h1>
      <div>
        {leagueName.map((res) => {
          return (
            <>
              <h4 key={res.competition.id}>{res.competition.name}</h4>
              <p>{date}</p>
              <p key={res.id}>Matchday: {res.matchday}</p>
              <p key={res.awayTeam.id}>
                {res.homeTeam.name} {res.score.homeTeam} vs {res.score.homeTeam}
                {res.awayTeam.name}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Matches;
