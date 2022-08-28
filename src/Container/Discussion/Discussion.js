import { useEffect, useState } from "react";
import Comment from "../../Components/Comment/Comment";
import styles from "../Discussion/discussion.module.css";
import { toast } from 'react-toastify';
import http from "../../Services/http";
import { Link, Outlet } from "react-router-dom";

const Discussion = () => {
    const [comments , setComments] = useState([]);
    const [error , setError] = useState(false)

    useEffect(() => {
        const getComments = async () => {
            try {
                const {data} = await http.get("/comments");
                setComments(data);
                
            } catch (error) {
                setError(true);
                toast.error('there is an error!');
                
            }

        }
        getComments();
    } , [])

    const renderComments = () => {
        let renderValue = <p>Loading ...</p>
        if(error) {
            renderValue = <p>Sorry fetching process failed</p>
        }
        if(comments.length > 0 && !error){
            renderValue = 
                <section className={styles.comments}>
                    <h3>Comments</h3>
                    {comments.map(
                    c => 
                    <Link to={`comments/${c.id}`} key={c.id}>
                        <Comment comment={c}>
                        </Comment>
                    </Link>
                    )}
                </section>
        }
        return renderValue;
    }

    return ( 
        <div className={styles.container}>
            {renderComments()}
            <Outlet/>
        </div>
     );
}
 
export default Discussion;