import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { MatchDetailCard } from './MatchDetailCard';
import { MatchSmallCard } from './MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import {Link} from 'react-router-dom'
import './HomePage.scss';
import { TeamTile } from './TeamTile';
export const HomePage = () => {

  const [teams, setTeam] = useState([]);
  const { teamName } = useParams();

  useEffect(
      () => {
       const fetchTeam = async () => {
          const response = await fetch(`http://localhost:8080/team/`);
          const data = await response.json();
          setTeam(data);
       };
       fetchTeam();
      },[]
  );
  
    return (
      <div className="HomePage">
          <div className="header-section">
            <h1 className="app-name"> IPL Dashboard </h1> 
          </div>
          <div className="team-grid">
               {
                   teams.map(team => ( 
                        <TeamTile teamName={team.teamName}></TeamTile>       
                   ))
               }
          </div>
      </div>
    );
  }
