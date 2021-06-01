import { React, useEffect, useState } from 'react'
import { MatchDetailCard } from './MatchDetailCard'
import { MatchSmallCard } from './MatchSmallCard'
export const TeamPage = () => {

  const [team, setTeam] = useState({matches: []});
  const { teamName } = 'no name';
  useEffect(
      () => {
       const fetchTeam = async () => {
          const response = await fetch(`http://localhost:8080/team/Mumbai Indians`);
          const data = await response.json();
          setTeam(data);

       };
       fetchTeam();
      },[]
  );

  if (!team || !team.teamName) {
      return <h1>Team not found</h1>
  }

    return (
      <div className="App">
          <h1>{team.teamName} </h1>
          <MatchDetailCard match={team.matches[0]}></MatchDetailCard>
          { 
            team.matches.map(match => {
              console.log(match);
             return <MatchSmallCard match={match}></MatchSmallCard>
            })
          }
      </div>
    );
  }
