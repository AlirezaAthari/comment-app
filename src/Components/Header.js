import Navigation from "./Navigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    return ( 
        <header>
            <h3 className="title">Comment App</h3>
            <ToastContainer position='top-right'/>
            <Navigation/>
        </header>
     );
}
 
export default Header;