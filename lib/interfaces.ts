import { ObjectId } from "mongodb";


export type Teams = {
    id: ObjectId;
    teamName: string;
    teamLogo: string;
  }

export type Competitions = {
    id: ObjectId;
    season: string;
    competitionTypes: string;
    category: string;
}

export type CompetitionTypes = {
    id: ObjectId;
    competitionName: string;
}
  
export type Category = {
    id: ObjectId;
    categoryName: string;
}



export type LeaderboardType = {
    id: ObjectId;
    competitionId: ObjectId;
    competitionName: string;
    categoryName: string;
    teamName: string;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    team: Teams;
    competition: Competitions;
  }
  
  export type MatchType = {   
    id: ObjectId   
    formattedDate: any;
    _id: string;
    competitionId: number;
    homeTeam: Teams;
    awayTeam: Teams;
    homeTeamName: string;
    awayTeamName: string;
    homeScore: number;
    awayScore: number;
    status: string;
    startDate: string;
    endDate: string;
    date: string;
    time: string;
    datetime: string;
    location: string;
    categoryName: string;
    competition: Competitions;
}