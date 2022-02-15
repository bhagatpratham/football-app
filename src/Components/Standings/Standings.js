import React, { useEffect, useState } from "react";
import "./Styles/Standings.css";

const Standings = () => {
  const [table, setTable] = useState([]);
  const [id, setId] = useState("2021");

  const fetchData = () => {
    fetch(`http://api.football-data.org/v2/competitions/${id}/standings`, {
      headers: { "X-Auth-Token": process.env.REACT_APP_FOOTBALL_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTable(data.standings[0].table);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>Standings</div>
      <div className="leagues">
        <ul className="">
          <li
            className="nav_child"
            onClick={() => {
              setId("2021");
              fetchData();
            }}
          >
            Premier league
          </li>
          <li
            className="nav_child"
            onClick={() => {
              setId("2002");
              fetchData();
            }}
          >
            Bundesliga
          </li>
          <li
            className="nav_child"
            onClick={() => {
              setId("2019");
              fetchData();
            }}
          >
            Seria A
          </li>
          <li
            className="nav_child"
            onClick={() => {
              setId("2014");
              fetchData();
            }}
          >
            La Liga
          </li>
          <li
            className="nav_child"
            onClick={() => {
              setId("2015");
              fetchData();
            }}
          >
            Ligue 1
          </li>
        </ul>
      </div>
      <thead>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Points</th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
        </tr>
      </thead>
      {table.map((res) => {
        return (
          <tbody>
            <tr>
              <td>{res.position}</td>
              <td>{res.team.name}</td>
              <td>{res.points}</td>
              <td>{res.playedGames}</td>
              <td>{res.won}</td>
              <td>{res.draw}</td>
              <td>{res.lost}</td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default Standings;
