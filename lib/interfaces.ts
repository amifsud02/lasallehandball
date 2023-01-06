import { ObjectId } from "mongodb";

export type Teams = {
    id: ObjectId;
    teamName: string;
}

export type Competitions = {
    id: ObjectId;
    competitionTypes: CompetitionTypes;
    category: Category;
}

export type CompetitionTypes = {
    id: ObjectId;
    competitionName: string;
}
  
export type Category = {
    id: ObjectId;
    categoryName: string;
}



export type Leaderboards = {
    id: ObjectId;
    competitionId: number;
    competitionName: string;
    categoryName: string;
    teamId: number;
    teamName: string;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    teams: Teams;
    competitions: Competitions;
  }
  
  export type Matches = {
      id: ObjectId;
      competitionId: number;
      homeTeam: Teams;
      awayTeam: Teams;
      homeTeamName: string;
      awayTeamName: string;
      homeScore: number;
      awayScore: number;
      status: string;
      date: string;
      time: string;
      location: string;
      categoryName: string;
      competitions: Competitions;
  }