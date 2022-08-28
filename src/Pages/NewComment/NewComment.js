import { useState } from "react";
import styles from "../NewComment/newComment.module.css";
import http from "../../Services/http";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NewComment = () => {
    const [newComment , setNewComment] = useState({name : "" , email : "" , body : ""});
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setNewComment({...newComment , [e.target.name] : e.target.value});
    }

    const submitNewComment = (e) => {
        e.preventDefault();
        if( newComment.name === "" || newComment.email === "" || newComment.body === "" ) {
            alert("fill all of the blanks!");
            return;
        }

        http.post("/comments",newComment).then((response) => { 
            navigate('/');
            toast.success('comment added');
        }).catch((error) => console.log(error))

        setNewComment({name : "" , email : "" , body : ""})
    }

    return ( 
        <div  className={styles.container}>
            <h3>New comment</h3>
            <label>
                name
                <input onChange={changeHandler} value={newComment.name} name="name" type="text"></input>
            </label>
            <label>
                email
                <input onChange={changeHandler} value={newComment.email} name="email" type="email"></input>
            </label>
            <label>
                body
                <textarea onChange={changeHandler} value={newComment.body} name="body"></textarea>
            </label>
            <button onClick={submitNewComment} className={styles.add} type="submit">Add Comment</button>
        </div>
     );
}
 
export default NewComment;