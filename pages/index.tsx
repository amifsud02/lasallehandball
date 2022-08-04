import { GetStaticProps } from "next/types"
import React from "react"
import { supabase } from "../utils/supabaseClient"

import Nav from "../components/Nav/Nav";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import Tabs from "../components/Tab/Tabs";
import Tab from "../components/Tab/Tab";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import Matches from "../components/Matches/Matches";



export type Teams = {
  id: number;
  teamName: string;
}

export type Competitions = {
  id: number;
  competitionTypes: CompetitionTypes;
  category: Category;
}

export type CompetitionTypes = {
  id: number;
  competitionType: string;
}

export type Category = {
  id: number;
  categoryName: string;
}

export type Leaderboards = {
  id: number;
  competitionId: number;
  competitionName: string;
  categoryName: string;
  teamId: number;
  teamName: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  teams: Teams;
  competitions: Competitions;
}


export default function Home(props: any)
{ 
  return(

    <>
            <Head>
                <title>LSHC - Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <main>
                <div className="hero">
                    <Nav/>  
                    <div className="g-container">
                        <div className="hero-title">
                            <h1>La Salle<br/>Handball<br/>Club</h1>
                        </div>
                    </div>

                    <div className="hero-email">
                        <hr></hr>
                        <a href="mailto:info@lasallehandball.com">info@lasallehandball.com</a>
                    </div>
                </div>

                <section>
                    <div className="parent">
                        <h1 className="title">Latest Matches</h1>

                        <Tabs redirect="/matches">
                            <Tab title="National League">
                                <Matches id={1}></Matches>
                                {/* <div className="match">
                                    <div className="home-team">
                                        <div className="team-badge"></div>
                                        <span className="team-name">La Salle</span>
                                    </div>
                                    <div className="match-details">
                                        <div className="match-type">
                                        <h4>National League - U21 Men</h4>
                                        </div>
                                        <div className="match-score">
                                        <span>25 - 24</span>  
                                        </div>
                                        <div className="match-status">
                                            FULL TIME
                                        </div>
                                    </div>
                                    <div className="away-team">
                                        <span className="team-name">HMS</span>
                                        <div className="team-badge"></div>
                                    </div>
                                </div> */}
                            </Tab>

                            <Tab title="MHA Cup">
                                <div className="match">
                                    <div className="home-team">
                                        <div className="team-badge"></div>
                                        <span className="team-name">La Salle</span>
                                    </div>
                                    <div className="match-details">
                                        <div className="match-type">
                                        <h4>MHA CUP - U21 Men</h4>
                                        </div>
                                        <div className="match-score">
                                        <span>25 - 24</span>  
                                        </div>
                                        <div className="match-status">
                                            FULL TIME
                                        </div>
                                    </div>
                                    <div className="away-team">
                                        <span className="team-name">HMS</span>
                                        <div className="team-badge"></div>
                                    </div>
                                </div>
                            </Tab>

                            <Tab title="Friendlies">
                                <div className="match">
                                    <div className="home-team">
                                        <div className="team-badge"></div>
                                        <span className="team-name">La Salle</span>
                                    </div>
                                    <div className="match-details">
                                        <div className="match-type">
                                        <h4>Friendlies - U21 Men</h4>
                                        </div>
                                        <div className="match-score">
                                        <span>25 - 24</span>  
                                        </div>
                                        <div className="match-status">
                                            FULL TIME
                                        </div>
                                    </div>
                                    <div className="away-team">
                                        <span className="team-name">HMS</span>
                                        <div className="team-badge"></div>
                                    </div>
                                </div>
                                <div className="match">
                                    <div className="home-team">
                                        <div className="team-badge"></div>
                                        <span className="team-name">La Salle</span>
                                    </div>
                                    <div className="match-details">
                                        <div className="match-type">
                                        <h4>Friendlies - U21 Men</h4>
                                        </div>
                                        <div className="match-score">
                                        <span>25 - 24</span>  
                                        </div>
                                        <div className="match-status">
                                            FULL TIME
                                        </div>
                                    </div>
                                    <div className="away-team">
                                        <span className="team-name">HMS</span>
                                        <div className="team-badge"></div>
                                    </div>
                                </div>
                                <div className="match">
                                    <div className="home-team">
                                        <div className="team-badge"></div>
                                        <span className="team-name">La Salle</span>
                                    </div>
                                    <div className="match-details">
                                        <div className="match-type">
                                        <h4>Friendlies - U21 Men</h4>
                                        </div>
                                        <div className="match-score">
                                        <span>25 - 24</span>  
                                        </div>
                                        <div className="match-status">
                                            FULL TIME
                                        </div>
                                    </div>
                                    <div className="away-team">
                                        <span className="team-name">HMS</span>
                                        <div className="team-badge"></div>
                                    </div>
                                </div>                                
                            </Tab>
                        </Tabs>
                    </div>
                    
                    <div className="parent">
                        <h1 className="title">Standings</h1>

                        <Tabs redirect="/team">
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
                        </Tabs>
                    </div>
                </section>
                <section className="promo-banner">
                    <div className="parent">
                        <h1 className="pb-title">Become Part of a great team</h1>
                        <button className="pb-button">JOIN US</button>
                    </div>
                </section>
            </main>
        </>
    // <>
    //   {
    //     props.leaderboards.map(
    //       (leaderboard: Leaderboards) => {
    //         if(leaderboard.competitions.category.categoryName == "U21 Men")
    //         {
    //           return(
    //             <div>
    //               <h1>{leaderboard.teams.teamName}</h1>
    //               <h2>{leaderboard.competitionName}</h2>
    //               <h3>{leaderboard.competitions.category.categoryName}</h3>
    //               <h4>{leaderboard.played}</h4>
    //               <h4>{leaderboard.wins}</h4>
    //               <h4>{leaderboard.draws}</h4>
    //             </div>
    //           )
    //         } 
    //       }
    //     )
    //   }
      
    // </>            
  )
}
     

export const getStaticProps: GetStaticProps = async () => {
  const {data: teams} =  await supabase.from('teams').select('*')
  const {data: leaderboards} = await supabase.from('leaderboards').select("*, teams!inner(teamName), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))")

  return{
    props: {
      teams,
      leaderboards
    }
  }
}