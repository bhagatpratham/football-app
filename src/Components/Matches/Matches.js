import React, { useContext } from "react";
import { MatchesContext, MatchesDispatchContext } from "./Match";

const Matches = () => {
  const matchDetails = useContext(MatchesContext);
  const setMatchDetails = useContext(MatchesDispatchContext);

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
