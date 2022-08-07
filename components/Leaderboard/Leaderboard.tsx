import { Leaderboards } from '../../pages';

export default function Leaderboard({props, cid}: {props: any, cid: string})
{   
    var index: number = 0;

    return(
        <div className="leaderboard">
            <table width="100%">
                <thead>
                    <tr className="leaderboard-header">
                        <th id="w-75"><span title="Position">Pos</span></th>
                        <th id="w-425"><span title="Team">Team</span></th>
                        <th className="c-text" id="w-75"><span title="Games Played">GP</span></th>
                        <th className="c-text" id="w-75"><span title="Games Won">W</span></th>
                        <th className="c-text" id="w-75"><span title="Games Drew">D</span></th>
                        <th className="c-text" id="w-75"><span title="Games Lost">L</span></th>
                        <th className="c-text" id="w-75"><span title="Goal Difference">GD</span></th>
                        <th className="c-text" id="w-75"><span title="Points">PTS</span></th>
                    </tr>
                </thead>
                <tbody>
                   {props.map((leaderboard: Leaderboards) => 
                    {   
                        if(leaderboard.competitions.category.categoryName == cid)
                        {
                            index = index + 1;

                            return(
                                <tr className="lb-row" key={leaderboard.id}>
                                    <td className="lb-pos">{index}</td>
                                    <td className="lb-team">{leaderboard.teams.teamName}</td>
                                    <td className="c-text">{leaderboard.played}</td>
                                    <td className="c-text">{leaderboard.wins}</td>
                                    <td className="c-text">{leaderboard.draws}</td>
                                    <td className="c-text">{leaderboard.losses}</td>
                                    <td className="c-text">{leaderboard.goalDifference}</td>
                                    <td className="c-text">{leaderboard.points}</td>
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


