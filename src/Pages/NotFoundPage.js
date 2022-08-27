import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return ( 
        <>
            <p>404 : The page not found!</p>
            <Link to={'/'}>Back to home</Link>
        </>
     );
}
 
export default NotFoundPage;