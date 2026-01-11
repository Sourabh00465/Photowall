
function Comments(props){
    const handleSubmit = (event) => {
         event.preventDefault();
         const comment = event.target.elements.comment.value;  
         props.saveComments(comment,props.id);
         event.target.elements.comment.value =''
    }
    return(
    <div className="comment">
        {props.comment.map((comment,index) => (
                <p key={index}> {comment} </p>
        ))}
<form className="comment-form" onSubmit={handleSubmit}>
    <input type="text" placeholder="comment"name="comment"/>
    <input type="submit" hidden/>
</form>
    </div>
    )
}

export default Comments;