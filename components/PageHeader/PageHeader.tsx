import Nav from "../Nav/Nav";

type PageProps = {
    pageName: string;
}

const PageHeader = ({pageName}: PageProps) => {
    return (
        <>
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