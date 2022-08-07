import Nav from "../../components/Nav/Nav";
import PageHeader from "../../components/PageHeader/PageHeader";

function AboutPage(){
    return(
        <>
            <PageHeader pageName="About Us"/>

            <section>
                <div className="parent">
                    <div className="page-content">
                        <div className="page-content-header">
                            <div className="page-content-header-title"></div>
                        </div>
                        <div className="page-content-body">
                            <div className="page-content-body-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec euismod, nisi vel consectetur interdum, nisl nunc
                                    consectetur nisi, eget consectetur nisi nisl eget
                                    consectetur nisi.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec euismod, nisi vel consectetur interdum, nisl nunc
                                    consectetur nisi, eget consectetur nisi nisl eget
                                    consectetur nisi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default AboutPage;