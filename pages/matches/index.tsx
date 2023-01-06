import { GetStaticProps } from "next";

import EventCalendar from "../../components/EventCalendar/EventCalendar";
import Footer from "../../components/Footer/Footer";
import Matches from "../../components/Matches/Matches";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tab from "../../components/Tab/Tab";
import Tabs from "../../components/Tab/Tabs";
import { supabase } from "../../utils/supabaseClient";

function MatchesPage(props: any){
    return(
        <>
           <PageHeader pageName="Matches"/>
           <section>
                <div className="parent">
                    <h1 className="title">Latest Results</h1>

                        <Tabs redirect="/matches" showall={false}>
                            
                            <Tab title="National League">
                                <Matches props={props.matches} cid="National League" status="Finished"></Matches>
                            </Tab>

                            <Tab title="Louis Borg Cup">
                                <Matches props={props.matches} cid="Louis Borg Cup" status="Finished"></Matches>
                            </Tab>

                            <Tab title="Friendlies">
                                <Matches props={props.matches} cid="Friendlies" status="Finished"></Matches>
                            </Tab>
                        </Tabs>
                </div>

                <div className="parent">
                    <h1 className="title">Upcoming Matches</h1>

                        <Tabs redirect="/matches" showall={false}>
                            
                            <Tab title="National League">
                                <Matches props={props.matches} cid="National League" status="Not Started"></Matches>
                            </Tab>

                            <Tab title="Louis Borg Cup">
                                <Matches props={props.matches} cid="Louis Borg Cup" status="Not Started"></Matches>
                            </Tab>

                            <Tab title="Friendlies">
                                <Matches props={props.matches} cid="Friendlies" status="Not Started"></Matches>
                            </Tab>
                        </Tabs>
                </div>

                <div className="parent">
                    <div className="calendar">
                        <EventCalendar></EventCalendar>
                        <div className="events__container">

                        </div>
                    </div>
                </div>
                       

            </section>
           <Footer/>
        </>
        
    )
}

export default MatchesPage;

export const getStaticProps: GetStaticProps = async () => {
    
    const {data: matches} = await supabase.from('fixtures').select("*, homeTeam!inner(teamName, teamLogo), awayTeam!inner(teamName, teamLogo), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))").order('date', { ascending: true })
  
    return{
      props: {
        matches
      }
    }

  }