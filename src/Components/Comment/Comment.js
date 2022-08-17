import styles from "../Comment/comment.module.css"
const Comment = ({comment , getClickedComment}) => {
    return ( 
        <div  onClick={getClickedComment} value={comment} className={styles.container} >
            <h4>{comment.name}</h4>
            <p>{comment.email}</p>
        </div>
     );
}
 
export default Comment;