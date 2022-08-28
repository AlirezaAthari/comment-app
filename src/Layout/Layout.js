import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Layout = ({children}) => {
    return ( 
        <div className="layout">
            <Header/>
                <div className="container">
                    {children}
                </div>
            <Footer/>
        </div>
     );
}
 
export default Layout;