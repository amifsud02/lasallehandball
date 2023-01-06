import { GetStaticProps } from "next/types"

import { 
  getAllCompetitions, 
  getAllTeams,
  getLatestFixtures,
  getLatestResults 
} from "../lib/runner";

import React, { useEffect, useRef } from "react"
//import { supabase } from "../utils/supabaseClient"

import Nav from "../components/Nav/Nav";
import Tabs from "../components/Tab/Tabs";
import Tab from "../components/Tab/Tab";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import Matches from "../components/Matches/Matches";
import Layout from "../components/Layout/Layout";

export type Teams = {
  id: number;
  teamName: string;
  teamLogo: string;
}

export type Competitions = {
  id: number;
  season: string;
  competitionType: string;
  category: string;
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
    _id: string;
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
    datetime: string;
    location: string;
    categoryName: string;
    competition: Competitions;
}






export default function Home(props: any)
{   
  console.log(props);
  // const shimmer = (w: number, h: number) => `
  //   <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  //     <defs>
  //       <linearGradient id="g">
  //         <stop stop-color="#333" offset="20%" />
  //         <stop stop-color="#222" offset="50%" />
  //         <stop stop-color="#333" offset="70%" />
  //       </linearGradient>
  //     </defs>
  //     <rect width="${w}" height="${h}" fill="#333" />
  //     <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  //     <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  //   </svg>`

  // const toBase64 = (str: string) =>
  //   typeof window === 'undefined'
  //     ? Buffer.from(str).toString('base64')
  //     : window.btoa(str)

   return(
    <Layout title="Home - La Salle HC"> 
      <main> 
        <section className="hero">
          <Nav/> 

          <div className="parent">
            <div className="animate__animated animate__backInLeft hp-title" style={{}}>
              <h1>La Salle<br/>Handball<br/>Club</h1>
            </div> 
          </div>
          <div className="hero-content"> 
            <div className="hero-email">
              <hr></hr>
              <a href="mailto:info@lasallehandball.com">info@lasallehandball.com</a>
            </div>

            <div className="social__links">
              <a className="fb-icon" href="https://www.facebook.com">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/></svg>
              </a>
              <a className="insta-icon" href="https://www.instagram.com">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008z"/><circle cx="16.806" cy="7.207" r="1.078" fill="white"/><path fill="white" d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654h-.011z"/></svg>
              </a>
              <a className="tt-icon" href="https://www.tiktok.com">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a className="mail-icon" href="mailto:info@lasallehandball.com">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg>
              </a>
            </div>
          </div>
          {/* <div className="hero-content">  
            <div className="container">
              <div className="animate__animated animate__backInLeft hero-title d-flex ">
                <h1>La Salle<br/>Handball<br/>Club</h1>
              </div> 
            </div>
            <div className="hero-email">
              <hr></hr>
              <a href="mailto:info@lasallehandball.com">info@lasallehandball.com</a>
            </div>
          </div> */}
        </section>

        <section>
          <div className="parent">
              <h1 className="title">Latest Matches</h1>

                <Tabs redirect="/matches" showall={true}>
                  <Tab title="National League">
                    <Matches props={props.results} cid="National League" status="Finished"></Matches>
                  </Tab>

                  <Tab title="Louis Borg Cup">
                    <Matches props={props.results} cid="Louis Borg Cup" status="Finished"></Matches>
                  </Tab>

                  <Tab title="Friendlies">
                    <Matches props={props.results} cid="Friendlies" status="Finished"></Matches>
                  </Tab>
                </Tabs>
          </div>
        </section>

        {/*<section>     
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
        </section> */}

       {/*<section className="sponsor">
          <div className="carousel__wrapper">
            <div className="carousel2">
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/UAWings.png" alt="UAWings Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/Metalco.png?t=2022-09-27T20%3A11%3A27.354Z" alt="UAWings Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/JTI.png?t=2022-09-27T20%3A11%3A20.267Z" alt="JTI Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/AMC.png?t=2022-09-27T20%3A11%3A08.395Z" alt="AMC Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/UAWings.png" alt="UAWings Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/Metalco.png?t=2022-09-27T20%3A11%3A27.354Z" alt="UAWings Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/JTI.png?t=2022-09-27T20%3A11%3A20.267Z" alt="JTI Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/AMC.png?t=2022-09-27T20%3A11%3A08.395Z" alt="AMC Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/UAWings.png" alt="UAWings Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/Metalco.png?t=2022-09-27T20%3A11%3A27.354Z" alt="UAWings Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/JTI.png?t=2022-09-27T20%3A11%3A20.267Z" alt="JTI Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/AMC.png?t=2022-09-27T20%3A11%3A08.395Z" alt="AMC Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/UAWings.png" alt="UAWings Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/Metalco.png?t=2022-09-27T20%3A11%3A27.354Z" alt="UAWings Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/JTI.png?t=2022-09-27T20%3A11%3A20.267Z" alt="JTI Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/AMC.png?t=2022-09-27T20%3A11%3A08.395Z" alt="AMC Logo" />
              </div>
            </div>
          </div>

          <div className="carousel__wrapper">
            <div className="carousel">
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/PADEL.png?t=2022-09-27T20%3A09%3A43.868Z" alt="1Padel Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/MBI?t=2022-09-27T20%3A09%3A33.395Z" alt="MBI Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/Rootz.png" alt="Rootz Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/PADEL.png?t=2022-09-27T20%3A09%3A43.868Z" alt="1Padel Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/MBI?t=2022-09-27T20%3A09%3A33.395Z" alt="MBI Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/Rootz.png" alt="Rootz Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/PADEL.png?t=2022-09-27T20%3A09%3A43.868Z" alt="1Padel Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/MBI?t=2022-09-27T20%3A09%3A33.395Z" alt="MBI Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/Rootz.png" alt="Rootz Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/PADEL.png?t=2022-09-27T20%3A09%3A43.868Z" alt="1Padel Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/MBI?t=2022-09-27T20%3A09%3A33.395Z" alt="MBI Logo" />
              </div>
              <div className="carousel__slide">
                <img loading='lazy' src="https://jcyieqmvxhldriyzfmdp.supabase.co/storage/v1/object/public/logos/sponsors/Rootz.png" alt="Rootz Logo" />
              </div>
            </div>
          </div>
        </section> */}

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
            {/* <MiniGallery></MiniGallery> */}
            <div className="image-grid">
              <div className="image-row">
                <div className="image image-01"></div>  
                <div className="image image-02"></div>  
                <div className="image image-03"></div>  
              </div> 
              <div className="image-row">
                <div className="image image-04"></div>  
                <div className="image image-05"></div>  
              </div>  
              <div className="image-row">
                <div className="image image-06"></div>  
                <div className="image image-07"></div>  
                <div className="image image-08"></div>  
              </div>  
            </div>  
          </div>
        </section>
      </main>
    </Layout>
  )
}
     
export const getStaticProps: GetStaticProps = async () => {

  const teams = await getAllTeams();
  const competitions = await getAllCompetitions();

  const results = await getLatestResults();
  const fixtures = await getLatestFixtures();

  return {
    props: {
      teams, 
      competitions,
      results
    },

    revalidate: 10
  };
};



// export const getStaticProps: GetStaticProps = async () => {
//   const {data: leaderboards} = await supabase.from('leaderboards').select("*, teams!inner(teamName, teamLogo), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))").order('points', { ascending: false })
//   const {data: matches} = await supabase.from('fixtures').select("*, homeTeam!inner(teamName, teamLogo), awayTeam!inner(teamName, teamLogo), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))").eq('status', 'Finished').order('date', { ascending: true })

//   console.log(leaderboards)

//   return{
//     props: {
//       leaderboards,
//       matches
//     }
//   }
// }