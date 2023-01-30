import Image from 'next/image';
import { LeaderboardType } from "../../lib/interfaces"

export default function Leaderboard({props, cid}: {props: any, cid: string})
{   
    var index: number = 0;
    const css = {height: '100%', width: 'auto' };
    return(
        <div className="leaderboard">
            <table width="100%">
                <thead>
                    <tr className="leaderboard-header">
                        <th id="w-75"><span title="Position">Pos</span></th>
                        <th id="w-425"><span title="Team">Team</span></th>
                        <th className="c-text" id="w-75"><span title="Games Played">GP</span></th>
                        <th className="c-text c-hidden" id="w-75"><span title="Games Won">W</span></th>
                        <th className="c-text c-hidden" id="w-75"><span title="Games Drew">D</span></th>
                        <th className="c-text c-hidden" id="w-75"><span title="Games Lost">L</span></th>
                        <th className="c-text c-hidden" id="w-75"><span title="Goal Difference">GD</span></th>
                        <th className="c-text" id="w-75"><span title="Points">PTS</span></th>
                    </tr>
                </thead>
                <tbody>
                    
                   {props.map((leaderboard: LeaderboardType) => {   
                        if(leaderboard.competition.category == cid)
                        {
                            index = index + 1;

                            return(
                                <tr className="lb-row" key={(index+1)*10}>
                                    <td className="lb-pos c-text">{index}</td>
                                    <td className="lb-team">
                                        <div className="team-info">
                                            <div className="team-badge" style={{position: 'relative', height: '100%'}}>
                                                
                                               
                                               <Image src={leaderboard.team.teamLogo} alt={leaderboard.teamName} width={60} height={60}/>
                                               
                                            </div>
                                            {leaderboard.team.teamName}   
                                        </div>
                                    </td>
                                    <td className="c-text">{leaderboard.played}</td>
                                    <td className="c-text c-hidden">{leaderboard.wins}</td>
                                    <td className="c-text c-hidden">{leaderboard.draws}</td>
                                    <td className="c-text c-hidden">{leaderboard.losses}</td>
                                    <td className="c-text c-hidden">{leaderboard.goalDifference}</td>
                                    <td className="c-text ">{leaderboard.points}</td>
                                </tr> 
                            )
                            
                        }
                     }
                   )}                 
                </tbody>
            </table>
        </div>
    )
}


