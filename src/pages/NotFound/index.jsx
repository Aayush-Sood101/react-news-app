import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to="/news">Go to News Page</Link>
        </div>
    )
}

export default NotFound;