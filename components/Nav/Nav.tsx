import React, { useState } from "react";
import Link from "next/link";
import * as data from './links.json'
import Menu from './Menu'
import { useRouter } from "next/router";

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

type LinkType = {
    label: string;
    href: string;
}

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

const Nav: React.FC<{}> = () => {
    
    // Adding Responsive Functionality

    const [active, setActive] = useState(false)

    const showMenu = () =>{
        setActive(!active);
        console.log(active)
    }

    return(
        <div className='navbar container'>
            <div className='navbar-brand'>
                <img alt="logo" src="https://www.viewresults.com.mt/content/sports_clubs/3.png" width={75}></img>
            </div>
            
            <div className="menu-outline">
                {/* <MenuOutlined onClick={showMenu}></MenuOutlined> */}
            </div>

            <Links links={links}/>

            <Menu showMenu={showMenu} active={active}></Menu>
        </div>
    )
}

export default Nav;