import { GetStaticProps } from "next";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tab from "../../components/Tab/Tab";
import Tabs from "../../components/Tab/Tabs";
import Leaderboard from "../../components/Leaderboard/Leaderboard";

function FixturesPage()
{
    return(
        <>
           <PageHeader pageName="Leaderboard">
            <section>     
                <div className="parent">
                    <h1 className="title">Standings</h1>

                    {/* <Tabs redirect="/team" showall={false}>
                        <Tab title="National League Men">
                            <Leaderboard props={props.leaderboards} cid={"Men"}/>
                        </Tab>

                        <Tab title="National League Women">
                            <Leaderboard props={props.leaderboards} cid={"Women"}/>
                        </Tab>

                        <Tab title="U21 Men">
                            <Leaderboard props={props.leaderboards} cid={"U21 Men"}/>
                        </Tab>

                        <Tab title="U21 Women">
                            <Leaderboard props={props.leaderboards} cid={"U21 Women"}/>
                        </Tab>
                    </Tabs> */}
                </div>
                </section>
            </PageHeader>
        </>
        
    )
}

export default FixturesPage;


// export const getStaticProps: GetStaticProps = async () => {
//     const {data: leaderboards} = await supabase.from('leaderboards').select("*, teams!inner(teamName, teamLogo), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))").order('points', { ascending: false })
//     const {data: matches} = await supabase.from('fixtures').select("*, homeTeam!inner(teamName, teamLogo), awayTeam!inner(teamName, teamLogo), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))").eq('status', 'Full Time').order('date', { ascending: true })
  
//     console.log(leaderboards)
  
//     return{
//       props: {
//         leaderboards,
//         matches
//       }
//     }
//   }