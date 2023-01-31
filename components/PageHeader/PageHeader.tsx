import Nav from "../Nav/Nav";
import Layout from "../Layout/Layout";

type PageProps = {
    pageName: string;
    children: any;
}

const PageHeader = (props: PageProps) => {
    return (
        <Layout>
            <div className="page-header">
                <Nav/>
                <div className="parent">
                    <div className="page-header-info"> 
                        <div className="page-map">Home • {props.pageName}</div>
                        <div className="page-title">{props.pageName}</div>
                    </div>
                </div>
            </div>

            {props.children}
        </Layout>
    );
}

export default PageHeader;