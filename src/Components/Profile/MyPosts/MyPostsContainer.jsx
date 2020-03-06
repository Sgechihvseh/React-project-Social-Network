import React from 'react';
import {addPost, updateNewPostText} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        PostData: state.profilePage.PostData,
        newPostText: state.profilePage.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//           dispatch(addPostActionCreator())
//         },
//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextActionCreator(text))
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts)

export default MyPostsContainer;
