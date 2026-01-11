import posts from "../data/posts";
import { combineReducers } from 'redux';

// function comments(state={},action){
//   switch(action.type){
//     case 'ADD_COMMENT': 
//     if(!state[action.postId]){
//     return {...state, [action.postId]:action.comment}
//     } else {
//       return {...state, [action.postId]: [...state[action.postId],action.comment]}
//     }
//     default: return state;
//   }
// }
function comments(state = {}, action) {
  switch (action.type) {
    case 'ADD_COMMENT': {
      const { postId, comment } = action;
      const existing = state[postId] || [];
      return {
        ...state,
        [postId]: [...existing, comment]   // always an array
      };
    }
    case 'LOAD_COMMENT': return action.comment

    default:
      return state;
  }
}

function postsReducer(state = posts, action) {
  switch (action.type) {
    // case 'REMOVE_POST': return [...state.slice(0,action.index), ...state.slice(action.index +1)]
    case 'REMOVE_POST': return state.filter(post => post.id !== action.id);
    case 'ADD_POST': return [...state, action.post]
    case 'LOAD_POST': return action.post
    default: return state;
  }
}

const rootReducer = combineReducers({ comments, postsReducer })
export default rootReducer;