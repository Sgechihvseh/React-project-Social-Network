import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import photo from "../../images/user-icon.svg"

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
            props.SetUsers(responce.data.items)
        })
    }
    return <div>
        {
            props.users.map(u => <div>
                <span>
                    <div><img className={s.img} src={u.photos.small != null ? u.photos.small : photo}/></div>
                <div>
                    {u.followed ? <button onClick={() => {
                        props.Unfollow(u.id)
                    }}>UnFollowed</button> : <button onClick={() => {
                        props.Follow(u.id)
                    }}>Followed</button>}
                </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;