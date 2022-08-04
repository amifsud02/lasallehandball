
import { GetStaticProps } from 'next/types';
import { Leaderboards } from '../../pages';
import { supabase } from '../../utils/supabaseClient';

// export const getStaticProps: GetStaticProps = async () => {
//     const {data: leaderboards} = await supabase.from('leaderboards').select("*, teams!inner(teamName), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))")
    
//     console.log("Hello", leaderboards)

//     return{
//       props: {
//         leaderboards
//       }
//     }
//   }

export default function Leaderboard({props, cid}: {props: any, cid: string})
{   
    return(
        <div className="leaderboard">
            <table width="100%">
                <thead>
                    <tr className="leaderboard-header">
                        <th id="w-75">Pos</th>
                        <th id="w-425">Team</th>
                        <th id="w-75">GP</th>
                        <th id="w-75">W</th>
                        <th id="w-75">D</th>
                        <th id="w-75">L</th>
                        <th id="w-75">GD</th>
                        <th id="w-75">P</th>
                    </tr>
                </thead>
                <tbody>
                   {props.map((leaderboard: Leaderboards, index: number) => 
                    {
                        if(leaderboard.competitions.category.categoryName == cid)
                        {
                            return(
                                <tr key={leaderboard.id}>
                                    <td className="lb-pos">{index + 1}</td>
                                    <td className="lb-team">{leaderboard.teams.teamName}</td>
                                    <td>{leaderboard.played}</td>
                                    <td>{leaderboard.wins}</td>
                                    <td>{leaderboard.draws}</td>
                                    <td>{leaderboard.losses}</td>
                                    <td>{leaderboard.goalsFor}</td>
                                    <td>{leaderboard.goalsAgainst}</td>
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


