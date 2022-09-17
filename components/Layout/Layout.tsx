import Head from "next/head";
import Footer from "../Footer/Footer";

export type Props = {
    title: string;
    children: any;
}

export default function Layout(props: Props){
    return(
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            {props.children}
            <Footer></Footer>
        </>
    )
}