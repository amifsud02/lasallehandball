import { Match } from "../../pages"
import Image from "next/image"
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
                        <li className="match" key={match.id.toString()}>
                            <div className="home-team">
                                <div className="team-badge">
                                    <Image src={match.homeTeam.teamLogo} alt={match.homeTeam.teamName} width={60} height={60} />
                                </div>
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
                                    {match.date}
                                </div>
                            </div>
                            <div className="away-team">
                                <span className="team-name">{match.awayTeam.teamName}</span>
                                <div className="team-badge">
                                    <Image src={match.awayTeam.teamLogo} alt={match.awayTeam.teamName} width={60} height={60} />
                                </div>
                            </div>
                        </li>
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
        
    