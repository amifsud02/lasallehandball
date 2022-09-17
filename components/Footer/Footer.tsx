const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <div className="footer-content">
                    <div>
                        <div className="title">La Salle Handball Club</div>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                        <div>Social Media Icons</div>
                    </div>
                    <div>
                        <div className="title">Quick Links</div>
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
                        <div className="title">Contact Us</div>
                        <div className="f-info"><a href="mailto:info@lasallehandball.com">info@lasallehandball.com</a></div>
                        <div className="f-info">Mobile</div>
                        <div className="f-info">Address</div>
                    </div>
                </div>
            </div>

            <div className="sub-footer">
                <div className="sf-content">
                    © 2022 - La Salle Handball Club
                </div>
                <div className="sf-content">
                    Designed and Developed by <span>CGOWT</span>
                </div>
            </div>
        </footer>
       
    );
}

export default Footer;
