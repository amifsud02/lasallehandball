

import { useEffect, useState } from "react";
import { Match } from "..";

import EventCalendar from "../../components/EventCalendar/EventCalendar";
import Footer from "../../components/Footer/Footer";
import Matches from "../../components/Matches/Matches";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tab from "../../components/Tab/Tab";
import Tabs from "../../components/Tab/Tabs";

import { MatchType } from "../../lib/interfaces";

function MatchesPage(){

    const [isLoading, setLoading] = useState(true);
    const [fixtures, setFixturesData] = useState<MatchType[]>([]);
    const [results, setResultsData] = useState<MatchType[]>([]);

    useEffect(() => {
        async function fetchMatchesData() {
            const response = await fetch('/api/matches');
            const data = await response.json()
            
            const modifiedData = data.map((result: MatchType) => {
                const startDateString = result.startDate.toString();
                const endDateString = result.endDate.toString();
                const date = new Date(startDateString);
                var formattedDate = date.toLocaleString('en-UK', { day: 'numeric', month: "long", hour: 'numeric', minute: 'numeric' });
                formattedDate =  formattedDate.replace(",", " /");
            
                return{
                  ...result,
                  startDate: startDateString,
                  endDate: endDateString,
                  formattedDate: formattedDate
                }
            
              })

            const modifiedResults = modifiedData.filter((md: MatchType) => md.status === "Finished")
            const modifiedFixtures = modifiedData.filter((md: MatchType) => md.status === "Not Started")

            setFixturesData(modifiedFixtures);
            setResultsData(modifiedResults);

            setTimeout(function(){ 
                setLoading(false); 
            }, 2000);
            
        }
        fetchMatchesData()
    }, [])

    if(isLoading)
    {
        return (
            <div className="loader-wrapper">
                <span className="loader">
                    <span className="loader-inner">

                    </span>
                </span>
            </div>
        )
    }
    return(
        <>  
            
           <PageHeader pageName="Matches"/>
           <section>
                <div className="parent">
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FLaSalleHandball%2Fvideos%2F692202732455389%2F&show_text=false&width=560&t=0" width="560" height="314" style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                </div>

                <div className="parent">
                    <h1 className="title">Latest Results</h1>

                        <Tabs redirect="/matches" showall={false}>
                            
                            <Tab title="National League">
                                <Matches props={results} cid="National League" status="Finished"></Matches>
                            </Tab>

                            <Tab title="Louis Borg Cup">
                                <Matches props={results} cid="Louis Borg Cup" status="Finished"></Matches>
                            </Tab>

                            <Tab title="Friendlies">
                                <Matches props={results} cid="Friendlies" status="Finished"></Matches>
                            </Tab>
                        </Tabs>
                </div>

                <div className="parent">
                    <h1 className="title">Upcoming Matches</h1>

                        <Tabs redirect="/matches" showall={false}>
                            
                            <Tab title="National League">
                                <Matches props={fixtures} cid="National League" status="Not Started"></Matches>
                            </Tab>

                            <Tab title="Louis Borg Cup">
                                <Matches props={fixtures} cid="Louis Borg Cup" status="Not Started"></Matches>
                            </Tab>

                            <Tab title="Friendlies">
                                <Matches props={fixtures} cid="Friendlies" status="Not Started"></Matches>
                            </Tab>
                        </Tabs>
                </div>

                <div className="parent">
                    <div className="calendar">
                        <EventCalendar></EventCalendar>
                    </div>
                </div>
                       

            </section>
           <Footer/>
        </>
        
    )
}

export default MatchesPage;

