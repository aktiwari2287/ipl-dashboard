import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { MatchDetailCard } from './MatchDetailCard';

import { YearSelector } from './YearSelector';
import './MatchPage.scss';
export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();
    useEffect(
        () => {
         const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
         };
         fetchMatches();
        }, [teamName, year]
    );
    
    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select Year</h3>
                <YearSelector teamName={teamName}></YearSelector>
            </div>
            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                { 
                matches.map(match =>  {
                    return <MatchDetailCard teamName={teamName} match={match}></MatchDetailCard>
                })}
            </div>
            
        </div>
    );
}
