
import Image from "next/image"
import "crypto"
import CountdownTimer from "../Countdown/CountdownTimer";
import { MatchType } from "../../lib/interfaces";

export default function Matches({props, cid, status}: {props: MatchType[], cid: string, status?: string}) {
{       
    let counter = 0;
    const allMatches = props.filter(
        (match: MatchType) =>
          match.competition.competitionTypes == cid && match.status == status
      );

    if(allMatches.length === 0) {
        return(
            <p key="error-no-matches" className="error__match">No Matches Found</p>
        )
    }
    else
    {
        return(
            <>
            
                {allMatches.map((match: MatchType) => {   
                        
                    return(
                        <li className={`match ${match.status !== "Finished" ? 'notFin' : ''}`} key={Math.random()}>
                            
                                {
                                    match.status === "Finished"
                                    ?
                                        <>
                                            <div className="home-team">
                                                <div className="team-badge">
                                                    <Image src={match.homeTeam.teamLogo[0]} alt={match.homeTeam.teamName} width={60} height={60} />
                                                </div>
                                                <span className="team-name">{match.homeTeam.teamName}</span>
                                            </div>

                                            <div className="match-details">

                                                <div className="match-type">
                                                    <h4>{match.competition.competitionTypes} - {match.competition.category}</h4>
                                                </div>

                                                <div className="match-score">
                                                    <span>
                                                        {match.homeScore} - {match.awayScore}
                                                    </span>
                                                </div>

                                                <div className="match-status">
                                                    {match.status}
                                                </div>

                                                <div className="match-date">
                                                    {match.formattedDate}
                                                </div>
                                            </div>

                                            <div className="away-team">
                                                <span className="team-name">{match.awayTeam.teamName}</span>
                                                <div className="team-badge">
                                                    <Image src={match.awayTeam.teamLogo[0]} alt={match.awayTeam.teamName} width={60} height={60} />
                                                </div>
                                            </div>
                                        </>
                                    :
                                    <>
                                        <div className="match-type notFin">
                                            <h4>{match.competition.competitionTypes} - {match.competition.category}</h4>
                                        </div>

                                        
                                        <div className="home-team notFin">
                                            <div className="team-badge">
                                                <Image src={match.homeTeam.teamLogo[0]} alt={match.homeTeam.teamName} width={60} height={60} />
                                            </div>
                                            <span className="team-name">{match.homeTeam.teamName}</span>
                                        </div>

                                        <span className="vs notFin">VS</span>

                                        <div className="match-details notFin">
                                            <div className="match-type">
                                                <h4>{match.competition.competitionTypes} - {match.competition.category}</h4>
                                            </div>

                                            <div className="match-countdown">
                                                <CountdownTimer targetDate={match.startDate} />                                              
                                            </div>
                                        </div>

                                        <div className="away-team notFin">
                                            <span className="team-name">{match.awayTeam.teamName}</span>
                                            <div className="team-badge">
                                                <Image src={match.awayTeam.teamLogo[0]} alt={match.awayTeam.teamName} width={60} height={60} />
                                            </div>
                                        </div>
                                        
                                    </>

                                }


                            
                        </li>
                    )
                    
                })}
            
            </>
        )}
    }
}