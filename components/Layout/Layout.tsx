import Head from "next/head";

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
        </>
    )
}