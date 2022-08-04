//import { Close } from "@material-ui/icons";
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
        <div className={active ? 'd-flex' : 'd-hidden'}>
            {links.map((link: LinkType) => {
                return (
                    <div key={link.href} className='menu-items'>
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
        // <div className="menu-container">
        //     <Close onClick={showMenu} className="menu-close"></Close>
        //     
        // </div>
        <Links active={active} links={links}></Links>
    )
}

export default Menu;