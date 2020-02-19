import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" alt="" />
			{props.message}
			<div>
				<span className={s.like}>{props.LikesCount} like</span>
			</div>
		</div>
	)
}

export default Post;
