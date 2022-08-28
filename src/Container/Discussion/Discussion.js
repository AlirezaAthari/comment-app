import { useEffect, useState } from "react";
import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";
import styles from "../Discussion/discussion.module.css";
import { toast } from 'react-toastify';
import http from "../../Services/http";

const Discussion = () => {
    const [comments , setComments] = useState([]);
    const [clickedComment , setClickedComment] = useState(null);
    const [error , setError] = useState(false)

    const deleteComment = () => {
        setClickedComment(null);
        toast.success('deleted!');
    }

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
    } , [ , clickedComment])

    const renderComments = () => {
        let renderValue = <p>Loading ...</p>
        if(error) {
            renderValue = <p>Sorry fetching process failed</p>
        }
        if(comments.length > 0 && !error){
            renderValue = 
                <section className={styles.comments}>
                    <h3>Comments</h3>
                    {comments.map(c => <Comment comment={c} key={c.id} getClickedComment={() => setClickedComment(c)}/>)}
                </section>
        }
        return renderValue;
    }

    return ( 
        <div className={styles.container}>
            {renderComments()}
            <FullComment clickedComment={clickedComment} onDelete={() => deleteComment(clickedComment)}/>
            {/* <NewComment addNewComment={(newComment) => setComments([...comments , {...newComment , postId : 1}])}></NewComment> */}
        </div>
     );
}
 
export default Discussion;