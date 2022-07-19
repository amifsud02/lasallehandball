import { Close } from "@material-ui/icons";
import Nav from "components/Nav/Nav";
import Navbar from "components/Navbar/Navbar";
import Head from "next/head";
import Link from "next/link";

import Tabs from "components/Tab/Tabs";
import Tab from "components/Tab/Tab";

import { ReactEventHandler, useState } from "react";

import * as standings from "./leaderboard-list.json"
const standingsString = JSON.stringify(standings)
const standingsData = JSON.parse(standingsString).standings

import * as test from "./leaderboard-list.json"
const testString = JSON.stringify(test)
const testData = JSON.parse(testString).standings

type standingsType = {
    id: number;
    name: string;
    pos: number;
    played: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalDif: number;
}


export default function HomePage()
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
                                <div className="match">
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
                                </div>
                                <div className="match">
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
                                </div>
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
                                <div className="leaderboard">
                                    <table width="100%">
                                        <thead>
                                            <tr className="leaderboard-header">
                                                <th width="7.5%">Pos</th>
                                                <th width="42.5%">Team</th>
                                                <th width="7.5%">GP</th>
                                                <th width="7.5%">W</th>
                                                <th width="7.5%">D</th>
                                                <th width="7.5%">L</th>
                                                <th width="7.5%">GD</th>
                                                <th width="7.5%">P</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {standingsData.map((team : standingsType) => {
                                                return (
                                                    <tr key={team.id}>
                                                        <td className="lb-pos">{team.pos}</td>
                                                        <td className="lb-team">{team.name}</td>
                                                        <td>{team.played}</td>
                                                        <td>{team.won}</td>
                                                        <td>{team.draw}</td>
                                                        <td>{team.lost}</td>
                                                        <td>{team.goalDif}</td>
                                                        <td>{team.points}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </Tab>

                            <Tab title="National League Women">
                                National League Women
                            </Tab>

                            <Tab title="U21 Men">
                                U21 Men
                            </Tab>

                            <Tab title="U21 Women">
                                U21 Women
                            </Tab>
                        </Tabs>
                    </div>
                </section>
                <section>
                    <div className="">
                        <h1>Become Part of a great team</h1>
                        <button></button>
                    </div>
                </section>
            </main>
        </>
    )
}

