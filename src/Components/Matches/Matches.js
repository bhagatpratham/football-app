import React, { useEffect, useState } from "react";

const Matches = () => {
  const [matches, setMatches] = useState("");
  const fetchData = () => {
    fetch(
      `http://api.football-data.org/v2/competitions/2001/matches?status=SCHEDULED`,
      {
        headers: { "X-Auth-Token": "b19d4dbb617647f5a3fac0df525b5c83" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMatches();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Latest matches</h1>
      <ul>
        <li>Premier League</li> {/* 2084 */}
        <li>Bundesliga</li> {/* 2004 */}
        <li>UCL</li> {/* 2001 UEL: 2146 */}
        <li>La Liga</li> {/* 2014 */}
        <li>Ligue 1</li> {/* 2015 */}
        <li>Seria A</li> {/* 2019 */}
      </ul>
    </div>
  );
};

export default Matches;
