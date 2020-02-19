import React from 'react';
import s from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

    let friendsElements = props.navbarPage.names.map(n => (<FriendItem name={n.name}/>))

    return (
        <div className={s.friendsWrapper}>
            <h1>Friends</h1>
            <div className={s.elementsWrapper}>{friendsElements}</div>
        </div>
    )
}

export default Friends;