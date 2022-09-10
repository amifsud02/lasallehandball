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
        
        <>
            {links.map((link: LinkType) => {
                return (
                    <div key={link.href} className='menu-item'>
                        <Link href={link.href}>
                            <a className='menu-link'>{link.label}</a>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

// const Menu: React.FC<{showMenu: ReactEventHandler, active: boolean}> = ({showMenu, active}) => {

//     let opacityClasses = ["menu-overlay"];

//     active ? opacityClasses.push("opacity-on") : opacityClasses.push("opacity-off");

//     return(

//         <div 
//             className={opacityClasses.join(" ")}
//             onClick={showMenu}
//         >
            
//             <div className='sidebar-wrapper'>
//                 <div className='sidebar-menu'>
//                     <Links links={links} active={active}></Links>
//                 </div>
//             </div>

//         </div>

//         // <>
//         //     <i className='menu-toggle' onClick={showMenu}><Cross size={40} color="#fff"></Cross></i>
            
//         //     <div className={active ? 'menu-overlay' : 'menu-overlay-hidden'}>
//         //         <Links active={active} links={links}></Links>
//         //     </div>
//         // </>
       
//     )
// }

// export default Menu;