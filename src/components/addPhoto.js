import React from "react";
import { useNavigate } from "react-router-dom";


function AddPhoto({startAddingPostInDatabase}) {
    const navigate = useNavigate();
    function handleSubmit(event) {
       event.preventDefault();
       const imageLink = event.target.elements.link.value;
       const description = event.target.elements.description.value;
       const posts = {
         id: Date.now(),
         description: description,
         imageLink: imageLink
       }
       if(imageLink && description){
           startAddingPostInDatabase(posts)
           navigate('/');
       }
       event.target.reset();
              
       
    }
    return (
        <div>
            <h1> </h1>
            <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Link" name="link"/>
                <input type="text" placeholder="Description" name="description" />
                <button> Post </button>
            </form>
            </div>
        </div>
    )
}

export default AddPhoto;