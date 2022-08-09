import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";

function ContactPage(){
    return(
        <>
            <PageHeader pageName="Contact Us"/>
            <main>
                <div>
                    <form action="">
                        <div>
                            <h4>Your Name</h4>
                            <input type="text" placeholder="Enter Your Name"/>
                        </div>
                        <div>
                            <h4>Your Email</h4>
                            <input type="text" placeholder="Enter Your Email Address"/>
                        </div>
                        <div>
                            <h4>Enquiry</h4>
                            <textarea name="" id="" cols={30} rows={10} placeholder="Enter Your Enquiry"></textarea>
                        </div>
                    </form>
                </div>
               
            </main>
            <Footer/>
        </>
        
    )
}

export default ContactPage;