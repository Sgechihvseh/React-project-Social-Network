import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

    let newPost = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    let postMessageElements = props.PostData.map(p => (<Post message = {p.message} LikesCount = {p.LikesCount}/>))


    return (
        <div className={s.postBlock}>
            <textarea  onChange={onPostChange} ref={newPost} value={props.newPostText}/>
            <div>
                <button onClick={ onAddPost }>Add posts</button>
            </div>
            <div className={s.posts}>
				<h3>New post</h3>
            </div>
            {postMessageElements}
        </div>
    )
}

export default MyPosts;
