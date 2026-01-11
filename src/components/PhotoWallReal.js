import React from "react";
import Ph from "./photo";
import { Link } from "react-router-dom";

function Photo(props) {
    return (
        <div>
    <Link  to="/AddPhoto" className="add-button"> </Link>
        {/* <button onClick={props.onNavigateNextPage} className="add-button">  </button> */}
        <div className="photo-grid">
             {props.posts.slice().sort((a,b) =>  b.id - a.id).map((post,index) => <Ph key= {index} post={post} {...props} index={index}/>)}
        </div>
     </div> 
    )
    }



    export default Photo;




    
    // class Photo extends Component {
    //     render(){
    //         return <div className="photo-grid">
    //              {this.props.posts.map((post,index) => <Ph key= {index} post={post}/>)}
    //         </div>
    //     }
    // }