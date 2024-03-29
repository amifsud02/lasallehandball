import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as data from './links.json'
import { useRouter } from "next/router";

import { Cross as Hamburger } from 'hamburger-react'

import Image from 'next/image'

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

type LinkType = {
    label: string;
    href: string;
}

/*
 *  Links component
 *  Will render the links for the menu
 */
const Links: React.FC<{ links: LinkType[] }> = ( {links} ) => {

    const router = useRouter()

    return (
        <nav className='navbar-items'>
            {links.map((link: LinkType) => {
                return (
                    <li key={link.href} className="navbar-item">
                        <Link href={link.href}>
                            <a className={router.pathname == link.href ? "navbar-link active" : "navbar-link"}>{link.label}</a>
                        </Link>
                    </li>
                )
            })}
        </nav>
    )
}


/* 
 *   
*/
const Nav: React.FC<{}> = () => {
 
    const [isOpen, setOpen] = useState(false);
    
    // const handleClick = () => {
            
    //     if(isOpen === true) {         
    //         document.removeEventListener('touchmove', function(e) { e.preventDefault(); });
    //         console.log("True")
    //     }   
    //     else {            
    //         document.addEventListener(
    //             'touchmove', 

    //             function(e) { 
    //                 e.preventDefault();
    //                 console.log('Touch')
    //             },

    //             { passive:false }
    //         ); 
    //     }
    // }
        
    return (
        <div className="navbar-bg">
            <div className='navbar'>
                <div className={`navbar-brand ${isOpen ? 'active' : ''}`}>
                    <Image src={"https://i.postimg.cc/dQmDkZhK/LSHC.png"} width={75} height={75}></Image>
                </div>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <Links links={links}></Links>
                </div>

                <div className={`navbar-hamburger ${isOpen ? 'active' : ''}`}> 
                {/* onClick={handleClick}> */}
                    <Hamburger 
                        size={40} 
                        color="#fff" 
                        toggled={isOpen} 
                        toggle={setOpen}
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav;

    // const showMenu = () =>{ 
    //     setActive(!active);
    //     console.log(active)
    // }

    // return(
    //     <>
    //         <div className="navbar-bg">
    //             <div className='navbar container'>
    //                 <div className='navbar-brand'>
    //                     <img alt="logo" src="https://www.viewresults.com.mt/content/sports_clubs/3.png" width={75}></img>
    //                 </div>
    //                 <div className='navbar-overlay'>
    //                     <Links links={links}></Links>
    //                 </div>

    //                 <i className='menu-toggle' onClick={showMenu}><Cross size={40} color="#fff"></Cross></i>
    //             </div>
    //         </div>
    //     </>
           

