import Link from "next/link";

function ErrorPage()
{
    return(
        <div className="error-parent">
            <div className="error-content">
                <h1 className="error-404">404</h1>
                <div className="error-title-content">
                    <h3 className="error-title">error</h3>
                    <h3 className="error-title">page not found</h3>
                </div>
            </div>
            <div className="error-back">
                <Link href="/">Back</Link>
            </div>
            
        </div>
        
    )
}

export default ErrorPage;

