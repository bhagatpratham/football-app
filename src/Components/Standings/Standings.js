import React, { useEffect, useState } from "react";

const Standings = () => {
  const [table, setTable] = useState([]);
  const [id, setId] = useState("2021");

  const fetchData = () => {
    fetch(`http://api.football-data.org/v2/competitions/${id}/standings`, {
      headers: { "X-Auth-Token": "b19d4dbb617647f5a3fac0df525b5c83" },
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
      <div>Standings Pl</div>
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