import { GetStaticProps } from "next/types"
import React, { useEffect, useRef } from "react"
import { supabase } from "../utils/supabaseClient"

import Image from 'next/image'

import Nav from "../components/Nav/Nav";
import Head from "next/head";
import Tabs from "../components/Tab/Tabs";
import Tab from "../components/Tab/Tab";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import Matches from "../components/Matches/Matches";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import MiniGallery from "../components/MiniGallery/MiniGallery";


export type Teams = {
  id: number;
  teamName: string;
  teamLogo: string;
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
  return(
    <Layout title="Home - La Salle HC"> 
      <main> 
        <section className="hero">
          <Nav/> 
          <div className="hero-content">  
            <div className="container">
              <div className="animate__animated animate__backInLeft hero-title d-flex ">
                <h1>La Salle<br/>Handball<br/>Club</h1>
              </div> 
            </div>
            <div className="hero-email">
              <hr></hr>
              <a href="mailto:info@lasallehandball.com">info@lasallehandball.com</a>
            </div>
          </div>
        </section>

        <section>
          <div className="parent">
              <h1 className="title">Latest Matches</h1>

                <Tabs redirect="/matches" showall={true}>
                  <Tab title="National League">
                    <Matches props={props.matches} cid="National League"></Matches>
                  </Tab>

                  <Tab title="MHA Cup">
                    <Matches props={props.matches} cid="MHA Cup"></Matches>
                  </Tab>

                  <Tab title="Friendlies">
                    <Matches props={props.matches} cid="Friendlies"></Matches>
                  </Tab>
                </Tabs>
          </div>
        </section>

        <section>     
          <div className="parent">
              <h1 className="title">Standings</h1>

              <Tabs redirect="/team" showall={false}>
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

         <section className="sponsor">
          <div className="slider">
            <div className="slide-track">
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            </div>
          </div>

          <div className="slider">
            <div className="slide-track2">
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            <img className="sponsor-logo slide" src="https://www.gamblerspick.com/uploads/monthly_2019_07/rootz.png.e291d32332a0a0702833f8f65c9e61f0.png"></img>
            </div>
          </div>
        </section>
        
        <section className="promo-banner">
          <div className="pb-parent">
            <div className="pb-title">
              Become Part of a great team
            </div>
            <button className="pb-button">
              Join Us
            </button>
          </div>
        </section>

        <section className="s-gallery">
          <div className="parent">
            <h1 className="title">Gallery</h1>
            <MiniGallery></MiniGallery>
          </div>
        </section>
      </main>
    </Layout>
  )
}
     

export const getStaticProps: GetStaticProps = async () => {
  const {data: leaderboards} = await supabase.from('leaderboards').select("*, teams!inner(teamName, teamLogo), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))").order('points', { ascending: false })
  const {data: matches} = await supabase.from('fixtures').select("*, homeTeam!inner(teamName, teamLogo), awayTeam!inner(teamName, teamLogo), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))").eq('status', 'Full Time').order('date', { ascending: true })

  console.log(leaderboards)

  return{
    props: {
      leaderboards,
      matches
    }
  }
}