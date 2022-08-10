import { Cross, Cross as Hamburger } from 'hamburger-react'

import Link from "next/link";
import { ReactEventHandler } from "react";
import * as data from './links.json'

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

type LinkType = {
    label: string;
    href: string;
}

const Links: React.FC<{ links: LinkType[], active: boolean}> = ({links, active}) => {
    return (
        // <div className={active ? 'd-flex' : 'd-hidden'}>
        <div>
            {links.map((link: LinkType) => {
                return (
                    <div key={link.href} className='menu-item'>
                        <Link href={link.href}>
                            <a className='menu-link'>{link.label}</a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

const Menu: React.FC<{showMenu: ReactEventHandler, active: boolean}> = ({showMenu, active}) => {
    return(
        <>
            <i className='menu-toggle' onClick={showMenu}><Cross size={40} color="#fff"></Cross></i>
            
            <div className={active ? 'menu-overlay-active' : 'menu-overlay-hidden'}>
                <Links active={active} links={links}></Links>
            </div>
        </>
       
    )
}

export default Menu;