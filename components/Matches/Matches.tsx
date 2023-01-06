import { Match } from "../../pages"
import Image from "next/image"
import "crypto"
import CountdownTimer from "../Countdown/CountdownTimer";
import DateFormatter from "../Date/DateFormatter";
import { randomUUID } from "crypto";

export default function Matches({props, cid, status}: {props: any, cid: string, status: string}) {
{       
    let counter = 0;

    return(
        <>
            {
            props.map((match: Match) => {
                // if(match.competitions.competitionTypes.competitionName === cid)
                // { 
                //     if(match.status === status)
                //     {   
                //         counter += 1;
                //         return(
                //             <li key={`${match.id}`} className={`match ${status === 'Not Started' ? 'match__upcoming' : ''}`} >
                //                 <div className={`home-team ${status === 'Not Started' ? 'team__none' : ''}`}>
                //                     <div className="team-badge">
                //                         <Image src={match.homeTeam.teamLogo} alt={match.homeTeam.teamName} width={60} height={60} />
                //                     </div>
                //                     <span className="team-name">{match.homeTeam.teamName}</span>
                //                 </div>

                //                 <div className="match-details">
                //                     <div className="match-type">
                //                         <h4>{match.competitions.competitionTypes.competitionName} - {match.competitions.category.categoryName}</h4>
                //                     </div>  

                //                     <div className={`${status === 'Not Started' ? 'team__upcoming' : 'd-none'}`}>
                //                         <div className="home-team">
                //                             <div className="team-badge">
                //                                 <Image src={match.homeTeam.teamLogo} alt={match.homeTeam.teamName} width={60} height={60} />
                //                             </div>
                //                             <span className="team-name">{match.homeTeam.teamName}</span>
                //                         </div>
                //                         <div className="">VS</div>
                //                         <div className="away-team">
                //                             <span className="team-name">{match.awayTeam.teamName}</span>
                //                             <div className="team-badge">
                //                                 <Image src={match.awayTeam.teamLogo} alt={match.awayTeam.teamName} width={60} height={60} />
                //                             </div>
                //                         </div>
                //                     </div>
                                    
                //                     { 
                //                         match.status === "Not Started" 
                //                             ?
                //                                 <> 
                //                                     <div className="match-countdown">
                //                                         <CountdownTimer targetDate={match.datetime} />
                //                                     </div>
                //                                     <p className="match-date">
                //                                         <DateFormatter date={match.datetime}/>
                //                                     </p>
                //                                     <p className="match-location">{match.location}</p>
                //                                 </>
                //                             :
                                        
                //                         <>
                //                             <div className="match-score">
                //                                 <span>
                //                                     {match.homeScore} - {match.awayScore}
                //                                 </span>
                //                             </div>
                //                             <div className="match-status">
                //                                 {match.status}
                //                             </div>
                //                         </>
                //                     }
                //                 </div>

                //                 <div className={`away-team ${status === 'Not Started' ? 'team__none' : ''}`}>
                //                     <span className="team-name">{match.awayTeam.teamName}</span>
                //                     <div className="team-badge">
                //                         <Image src={match.awayTeam.teamLogo} alt={match.awayTeam.teamName} width={60} height={60} />
                //                     </div>
                //                 </div>
                //             </li>
                //         )
                //     }
                // }
                // if(match.competitions.competitionTypes.competitionName == cid)
                // { 
                //     return(
                //         <li className="match" key={match.id.toString()}>
                //             <div className="home-team">
                //                 <div className="team-badge">
                //                     <Image src={match.homeTeam.teamLogo} alt={match.homeTeam.teamName} width={60} height={60} />
                //                 </div>
                //                 <span className="team-name">{match.homeTeam.teamName}</span>
                //             </div>
                //             <div className="match-details">
                //                 <div className="match-type">
                //                 <h4>{match.competitions.competitionTypes.competitionName} - {match.competitions.category.categoryName}</h4>
                //                 </div>
                //                 <div className="match-score">
                //                     <span>
                //                         {match.homeScore} - {match.awayScore}   
                //                     </span>  
                //                 </div>
                //                 <div className="match-status">
                //                     {match.status}
                //                 </div>
                //             </div>
                //             <div className="away-team">
                //                 <span className="team-name">{match.awayTeam.teamName}</span>
                //                 <div className="team-badge">
                //                     <Image src={match.awayTeam.teamLogo} alt={match.awayTeam.teamName} width={60} height={60} />
                //                 </div>
                //             </div>
                //         </li>
                //     )
                // }
                if(match.competition.competitionType == cid)
                {
                    return(
                        <li className="match" key={Math.random()}>
                            <div className="home-team">
                                <div className="team-badge">
                                    <Image src={match.homeTeam.teamLogo[0]} alt={match.homeTeam.teamName} width={60} height={60} />
                                </div>
                                <span className="team-name">{match.homeTeam.teamName}</span>
                            </div>
                            <div className="match-details">
                                <div className="match-type">
                                <h4>{match.competition.competitionType} - {match.competition.category}</h4>
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
                                <div className="team-badge">
                                    <Image src={match.awayTeam.teamLogo[0]} alt={match.awayTeam.teamName} width={60} height={60} />
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
                            <p key="error-no-matches" className="error__match">No Matches Found</p>
                        )
                    }
                }
            })}
        
        </>
    )}
}