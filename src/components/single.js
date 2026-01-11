import React from "react";
import { useParams } from "react-router-dom";
import Ph from "./photo";
import Comments from "./comment";


function Single(props) {
    const {id} = useParams();
    const post = props.posts.find((post) => post.id === Number(id));
    const comments = props.comments[id] || [];
    const index = props.posts.findIndex((post) => post.id === id);
    if(props.loading === true){
      return <div className="loader"> ...loading </div>
    }else if(post){
    return (
    <div className="single-photo">
    <Ph post={post} {...props} index={index}></Ph>
    <Comments saveComments={props.saveComments} comment={comments} id={id}/>
    </div>  
  )
}else{
  return <h1> .. no post found </h1>
}
}

export default Single;