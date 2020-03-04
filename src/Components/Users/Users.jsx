import React from "react";
import s from "./Users.module.css";
import photo from "../../images/user-icon.svg"

const Users = (props) => {

        let pagesCount = Math.ceil(props.totalCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        ;
        return <div>
            <span onClick={() => {
                props.Back()
            }}>Back</span>

            {
                pages.map(p => {
                    if (p >= props.nextPage - 20 && p <= props.nextPage) {
                        return <span onClick={(e) => {
                            props.onPageChanged(p)
                        }} className={props.currentPage === p && s.activePage || s.numberPage}>{p}</span>
                    }

                })
            }
            <span onClick={() => {
                props.Forward()
            }}>Forward</span>
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