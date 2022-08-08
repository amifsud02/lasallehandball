const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <div>
                    <div>La Salle</div>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                    <div>Social Media Icons</div>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Management</li>
                        <li>Matches</li>
                        <li>Fixtures</li>
                        <li>Team</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <div>Contact Us</div>
                    <div>Email</div>
                    <div>Mobile</div>
                    <div>Address</div>
                </div>
            </div>

            <div className="sub-footer">
                <div className="sf-content">
                    © 2022 - La Salle Handball Club
                </div>
                <div className="sf-content">
                    Designed and Developed by <span>TPLL</span>
                </div>
            </div>
        </footer>
       
    );
}

export default Footer;
