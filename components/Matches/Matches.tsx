import { Match } from "../../pages"

export default function Matches({props, cid}: {props: any, cid: string})
{   
    
    
    let counter = 0;

    return(
        <>
            {
            props.map((match: Match) => {
                if(match.competitions.competitionTypes.competitionName == cid)
                { 
                    return(
                        <div className="match">
                            <div className="home-team">
                                <div className="team-badge"></div>
                                <span className="team-name">{match.homeTeam.teamName}</span>
                            </div>
                            <div className="match-details">
                                <div className="match-type">
                                <h4>{match.competitions.competitionTypes.competitionName} - {match.competitions.category.categoryName}</h4>
                                </div>
                                <div className="match-score">
                                    <span>
                                        {match.homeScore} - {match.awayScore}   
                                    </span>  
                                </div>
                                <div className="match-status">
                                    {match.status}
                                </div>
                            </div>
                            <div className="away-team">
                                <span className="team-name">{match.awayTeam.teamName}</span>
                                <div className="team-badge"></div>
                            </div>
                        </div>
                    )
                }
                else
                {
                    if(counter == 0)
                    {
                        counter++;

                        return(
                            <h1>No Matches Found</h1>
                        )
                    }
                    
                    
                }
            })}
               
            
        
        </>
            
        
    )
}
        
    