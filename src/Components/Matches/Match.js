import React, { createContext, useState, useEffect } from "react";

const MatchesContext = createContext(undefined);
const MatchesDispatchContext = createContext(undefined);

function MatchProvider({ children }) {
  const [matches, setMatches] = useState("");
  const [id, setId] = useState(2001);

  const fetchData = () => {
    fetch(
      `http://api.football-data.org/v2/competitions/${id}/matches?status=SCHEDULED`,
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
    <MatchesContext.Provider value={matches}>
      <MatchesDispatchContext.Provider value={setMatches}>
        {children}
      </MatchesDispatchContext.Provider>
    </MatchesContext.Provider>
  );
}

export { MatchProvider, MatchesContext, MatchesDispatchContext };
