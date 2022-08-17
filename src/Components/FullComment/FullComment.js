import http from "../../Services/http";
import styles from "../FullComment/fullComment.module.css";

const FullComment = ({clickedComment , onDelete}) => {
    const deleteHandler = async () => {
        
        try {
            await http.delete(`/comments/${clickedComment.id}`);
            onDelete();
        } catch (error) {
            console.log("Comment did not delete!");
        }

    }
    return (
        <>
            {
                clickedComment ? 
                <div className={styles.container}>
                    <h3>Comment</h3>
                 <div>
                    <p className={styles.name}>{clickedComment.name}</p>
                    <p className={styles.email}>{clickedComment.email}</p>
                </div>
                <div className={styles.body}>{clickedComment.body}</div>
                <button className={styles.delete} onClick={deleteHandler}>delete</button>
                </div> : <></>}
        </>
     );
}
 
export default FullComment;