import { NavLink} from 'react-router-dom';

const items = [
    {name : "Home" , to : "/"} ,
    {name : "New Comment" , to : "/new-comment"} ,
]

const Navigation = () => {
    return ( 
        <nav>
          <ul>
            {items.map(item => 
            <li className="link" key={item.to}>
                <NavLink to={item.to} className={(navData) => (navData.isActive) ? "link activeLink" : "link"} >
                    {item.name}
                </NavLink>
            </li>)}
          </ul>
        </nav>
     );
}
 
export default Navigation ;