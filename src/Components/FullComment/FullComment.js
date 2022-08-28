import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import http from "../../Services/http";
import styles from "../FullComment/fullComment.module.css";

const FullComment = () => {
    const [comment , setComment] = useState(null);
    const navigate = useNavigate();
    const clickedComment = useParams();
    useEffect(() => {
        const getComments = async () => {
            try {
                const {data} = await http.get(`/comments/${clickedComment.id}`);
                setComment(data);
                
            } catch (error) {
                toast.error('there is an error!');
            }

        }
        getComments();

    } , [clickedComment])
    const deleteHandler = async () => {
        
        try {
            await http.delete(`/comments/${clickedComment.id}`).then((response) => navigate('/'));
            toast.success('deleted!');
        } catch (error) {
            console.log("Comment did not delete!");
        }

    }
    return (
        <>
            {
                comment ? 
                <div className={styles.container}>
                    <h3>Comment</h3>
                 <div>
                    <p className={styles.name}>{comment.name}</p>
                    <p className={styles.email}>{comment.email}</p>
                </div>
                <div className={styles.body}>{comment.body}</div>
                <button className={styles.delete} onClick={deleteHandler}>delete</button>
                </div> : <></>}
        </>
     );
}
 
export default FullComment;