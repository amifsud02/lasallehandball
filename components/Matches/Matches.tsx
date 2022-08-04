type Fixture = {
    id: number;
    homeTeamId: number;
    awayTeamId: number;
    homeScore: number;
    awayScore: number;
    date: string;
    location: string;
    status: string;
    competitionId: number;
}

const Matches = ({id}: {id: number}) =>
{   
    
   
            return(

                <div className="match">
                    <div className="home-team">
                        <div className="team-badge"></div>
                        <span className="team-name"></span>
                    </div>
                    <div className="match-details">
                        <div className="match-type">
                        <h4>National League - U21 Men</h4>
                        </div>
                        <div className="match-score">
                        <span></span>  
                        </div>
                        <div className="match-status">
                            
                        </div>
                    </div>
                    <div className="away-team">
                        <span className="team-name"></span>
                        <div className="team-badge"></div>
                    </div>
                </div>
            )
        }
        
    
export default Matches