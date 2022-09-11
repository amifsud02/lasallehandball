import { GetStaticProps } from "next/types"
import React, { useEffect } from "react"
import { supabase } from "../utils/supabaseClient"

import Nav from "../components/Nav/Nav";
import Head from "next/head";
import Tabs from "../components/Tab/Tabs";
import Tab from "../components/Tab/Tab";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import Matches from "../components/Matches/Matches";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";


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
  competitionName: string;
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

export type Match = {
    id: number;
    competitionId: number;
    homeTeam: Teams;
    awayTeam: Teams;
    homeTeamName: string;
    awayTeamName: string;
    homeScore: number;
    awayScore: number;
    status: string;
    date: string;
    time: string;
    location: string;
    categoryName: string;
    competitions: Competitions;
}


export default function Home(props: any)
{ 
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh);
  }, []);
  

  // document.addEventListener('touchmove', function() { e.preventDefault(); }, { passive:false });
  return(

    <Layout title="Home - La Salle HC"> 
      <main>
        <section className="hero">
          <Nav/>             

        <div className="container">
            <div className="hero-title d-flex">
              <h1>La Salle<br/>Handball<br/>Club</h1>
            </div> 
          </div>
              
          {/* <div className="hero-email">
            <hr></hr>
            <a href="mailto:info@lasallehandball.com">info@lasallehandball.com</a>
          </div> */}
        </section>
      </main>
    </Layout>
  )
}
     

export const getStaticProps: GetStaticProps = async () => {
  const {data: leaderboards} = await supabase.from('leaderboards').select("*, teams!inner(teamName), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))").order('points', { ascending: false })
  const {data: matches} = await supabase.from('fixtures').select("*, homeTeam!inner(teamName), awayTeam!inner(teamName), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))").eq('status', 'Not Started').order('date', { ascending: true })

  return{
    props: {
      leaderboards,
      matches
    }
  }
}



      {/* <main>
        <section classNameName="hero">
          <Nav/>             

        <div classNameName="container">
            <div classNameName="hero-title d-flex">
              <h1>La Salle<br/>Handball<br/>Club</h1>
            </div> 
          </div>
              
          <div classNameName="hero-email">
            <hr></hr>
            <a href="mailto:info@lasallehandball.com">info@lasallehandball.com</a>
          </div>
        </section>
      </main> */}
      {/* <Footer></Footer> */}