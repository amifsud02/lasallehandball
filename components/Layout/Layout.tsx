import Head from "next/head";

import dynamic from "next/dynamic";
import Nav from "../Nav/Nav";

const Footer = dynamic(() => import('../Footer/Footer'))

export type Props = {
    title?: string;
    children: any;
}

export default function Layout(props: Props){
    return(
        <>
            <Head>
                <title>{props.title}</title>

                <meta charSet="UTF-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui"></meta>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                <meta name="title" content={`La Salle Handball Club - ${props.title}`}></meta> 
                <meta name="description" content="An amateur club with a professional mentality."></meta> 

                <meta property="og:type" content="website"></meta> 
                <meta property="og:url" content="https://metatags.io/"></meta> 
                <meta property="og:title" content={`La Salle Handball Club - ${props.title}`}></meta> 
                <meta property="og:description" content="An amateur club with a professional mentality."></meta> 
                {/* <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>  */}

                <meta property="twitter:card" content="summary_large_image"></meta> 
                <meta property="twitter:url" content="https://metatags.io/"></meta> 
                <meta property="twitter:title" content={`La Salle Handball Club - ${props.title}`}></meta> 
                <meta property="twitter:description" content="An amateur club with a professional mentality."></meta> 
                {/* <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>     */}

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
        
            {props.children}

            <Footer/>
        </>
    )
}