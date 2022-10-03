import Nav from "../Nav/Nav";
import Image from 'next/image'
import Head from "next/head";
type PageProps = {
    pageName: string;
}

const PageHeader = ({pageName}: PageProps) => {
    return (
        <>
              <Head>
                <title>{pageName}</title>

                <meta charSet="UTF-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, material-ui"></meta>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                <meta name="title" content={`La Salle Handball Club - ${pageName}`}></meta> 
                <meta name="description" content="An amateur club with a professional mentality."></meta> 

                <meta property="og:type" content="website"></meta> 
                <meta property="og:url" content="https://metatags.io/"></meta> 
                <meta property="og:title" content={`La Salle Handball Club - ${pageName}`}></meta> 
                <meta property="og:description" content="An amateur club with a professional mentality."></meta> 
                {/* <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>  */}

                <meta property="twitter:card" content="summary_large_image"></meta> 
                <meta property="twitter:url" content="https://metatags.io/"></meta> 
                <meta property="twitter:title" content={`La Salle Handball Club - ${pageName}`}></meta> 
                <meta property="twitter:description" content="An amateur club with a professional mentality."></meta> 
                {/* <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>     */}

                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="page-header">
                <Nav/>
                <div className="parent">
                    <div className="page-header-info"> 
                        <div className="page-map">Home • {pageName}</div>
                        <div className="page-title">{pageName}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageHeader;