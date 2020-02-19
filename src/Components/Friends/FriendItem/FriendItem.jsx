import React from 'react';
import s from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={s.friendWrapper}>
            <div className={s.round}></div>
            {props.name}
        </div>
    )
}

export default FriendItem;