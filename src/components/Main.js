import React, { Component } from "react";
// import Title from "./Title";
import Photo from "./PhotoWallReal"
import AddPhoto from "./addPhoto";
import { Link, Route, Routes } from "react-router-dom";
import Single from "./single";



class Main extends Component {
 
  state = {loading : true}

  componentDidMount(){
    this.props.startLoadingPost().then(() => {
      this.setState({loading : false})
    });
    this.props.startLoadingComments();
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <h1><Link to='/'> Photowall </Link></h1>
        <Routes>
          <Route path="/" element={<Photo {...this.props} />} />
          <Route path="/AddPhoto" element={<AddPhoto {...this.props} />} />
        <Route path="/single/:id" element={<Single loading={this.state.loading} {...this.props}/>}/>
        </Routes>
      </div>

    );
  }
}

// function FetchFromDatabase() {
//    return [{
//     id: 0,
//     description: "Naruto",
//     imageLink: "https://i.pinimg.com/1200x/d1/e6/17/d1e617fc15464a6e3cc7f6a5d1ed5c02.jpg"
//   },
//   {
//     id: 1,
//     description: "Ichigo",
//     imageLink: "https://i.pinimg.com/736x/d3/ac/c3/d3acc34893316018ee557dcf93027407.jpg"
//   },
//   {
//     id: 2,
//     description: "Goku",
//     imageLink: "https://i.pinimg.com/736x/1e/3b/75/1e3b7595e802cfa98110c1994096186a.jpg"
//   },];


export default Main;
// this.state = {
// posts: [
//   {
//     id: 0,
//     description: "Naruto",
//     imageLink: "https://i.pinimg.com/1200x/d1/e6/17/d1e617fc15464a6e3cc7f6a5d1ed5c02.jpg"
//   },
//   {
//     id: 1,
//     description: "Ichigo",
//     imageLink: "https://i.pinimg.com/736x/d3/ac/c3/d3acc34893316018ee557dcf93027407.jpg"
//   },
//   {
//     id: 2,
//     description: "Goku",
//     imageLink: "https://i.pinimg.com/736x/1e/3b/75/1e3b7595e802cfa98110c1994096186a.jpg"
//   }],
// screen: 'photos'
// }
//
// }

// removePhoto(postsRemoved) {
//   console.log(postsRemoved.description);
//   this.setState((state) => ({
//     posts: state.posts.filter(posts => posts !== postsRemoved)
//   }))
// }

// navigateNextPage() {
//   this.setState({
//     screen: 'addPhoto'
//   })
// }

// addNewPhoto(postSubmitted) {
//   this.setState((state) => ({
//       posts: state.posts.concat([postSubmitted])
//   }))
// }

// componentDidMount(){
//   const posts = FetchFromDatabase(); 
//   this.setState({
//     posts: posts
//   })
//   console.log('Component');

// }

// componentDidUpdate(){
//   alert('renedr')
// }

// eslint-disable-next-line no-lone-blocks
{/* <Routes>
        <Route exact path="/" element={
          <Photo posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigateNextPage={this.navigateNextPage} />}/>
        <Route path="/AddPhoto"  element={<AddPhoto onAddedPhoto={(addedPost)=>{this.addNewPhoto(addedPost)
        }}/>}/>
        </Routes> */}