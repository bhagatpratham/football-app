import React, { useEffect } from "react";

const Matches = () => {
  const API_KEY = "b19d4dbb617647f5a3fac0df525b5c83"; // b071a1c501e042f48493faed1de147c5

  const URL = "http://api.football-data.org/v2/competitions/2021/matches";

  const fetchData = () => {
    fetch(URL, { headers: { "X-Auth-Token": API_KEY } })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Latest matches</h1>
      <ul>
        <li>Premier league</li>
        <li>Bundesliga</li>
        <li>UCL</li>
        <li>La Liga</li>
        <li>Ligue 1</li>
        <li>Seria A</li>
      </ul>
    </div>
  );
};

export default Matches;
