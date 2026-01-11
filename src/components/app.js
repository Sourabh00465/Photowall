import { connect } from "react-redux"
import Main from "./Main";
import { bindActionCreators } from "redux";
import { removePost,addPost,addComment,startAddingPostInDatabase,startLoadingPost,startRemovingPosts,saveComments,startLoadingComments} from "../redux/action";
// connect store to main componenets //
function mapStateToProps(state) {
    return {
        posts: state.postsReducer,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
return bindActionCreators({removePost,addPost,addComment,startAddingPostInDatabase,startLoadingPost,startRemovingPosts,saveComments,startLoadingComments},dispatch)
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default  App;