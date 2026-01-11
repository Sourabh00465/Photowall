import {db} from "../database/config"


export function startAddingPostInDatabase(post) {
    return(dispatch) => {
        return db.ref("posts").child(post.id).set(post).then(() => dispatch(addPost(post)));
    }
}


export function startLoadingPost(){
    return(dispatch) => {
        return db.ref('posts').once('value').then((snapshot) => {
            let posts = [];
            snapshot.forEach(element => {
                   posts.push(element.val());
            })
            dispatch(loadPost(posts))
        })
    }
}

export function startRemovingPosts(id){
    return(dispatch) =>{
       return db.ref(`posts/${id}`).remove().then(() => {
        dispatch(removePost(id))
       })
    }
}

export function saveComments(comment,postId){
    return(dispatch) => {
        return db.ref(`comment/${postId}`).push(comment).then(() =>
        dispatch(addComment(comment,postId)))
    }
}

export function startLoadingComments() {
    return(dispatch) => {
        db.ref('comment').once('value').then((snapshot) => {
             let comments = {}
             snapshot.forEach((childSnapshot) => {
                   comments[childSnapshot.key] = Object.values(childSnapshot.val())
             })
             dispatch(loadComment(comments))
        })
    }
}
// remove action
export function removePost(id) {
     return {
        type: 'REMOVE_POST',
        id
     }
}

// adding post
export function addPost(post) {
    return {
        type:'ADD_POST',
        post
    }
}

export function addComment(comment,postId){
    return{
        type: 'ADD_COMMENT',
        postId,
        comment
    }
}

export function loadPost(post) {
   return{
    type: 'LOAD_POST',
    post
   }
}

export function loadComment(comment){
    return {
        type: 'LOAD_COMMENT',
        comment
    }
}

