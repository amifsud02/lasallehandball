import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

    const [active, setActive] = useState(false)

    const showMenu = () =>
    {
        setActive(!active)
    }

    return(
        <>
            <div className="navbar container">
                <div className="navbar-brand">
                    <img alt="logo" src="https://www.viewresults.com.mt/content/sports_clubs/3.png"></img>
                </div>

                <nav className="navbar-items">
                    <li className="navbar-item"><Link href='/'><a className="navbar-link">Home</a></Link></li>
                    <li className="navbar-item"><Link href='/about'><a className="navbar-link">About Us</a></Link></li>
                    <li className="navbar-item"><Link href='/management'><a className="navbar-link">Management</a></Link></li>
                    <li className="navbar-item"><Link href='/matches'><a className="navbar-link">Matches</a></Link></li>
                    <li className="navbar-item"><Link href='/fixtures'><a className="navbar-link">Fixtures</a></Link></li>
                    <li className="navbar-item"><Link href='/team'><a className="navbar-link">Team</a></Link></li>
                    <li className="navbar-item"><Link href='/contact'><a className="navbar-link">Contact Us</a></Link></li>
                </nav>
            </div>
        </>
    );
}

export default Navbar;

