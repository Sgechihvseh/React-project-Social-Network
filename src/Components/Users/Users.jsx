import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import photo from "../../images/user-icon.svg"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&&count=${this.props.pageSize}`).then(responce => {
            this.props.SetUsers(responce.data.items)
            this.props.SetTotalCount(responce.data.totalCount)
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.SetCurrentPage(pageNumber);
        if (pageNumber % 20 == 0) {
            this.props.NextPage(pageNumber + 20)
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&&count=${this.props.pageSize}`).then(responce => {
            this.props.SetUsers(responce.data.items)
            this.props.SetTotalCount(responce.data.totalCount)
        })
    }
    Back = () => {
        if (this.props.currentPage >= this.props.nextPage - 20 && this.props.nextPage - 20 > 0) {
            this.props.NextPage(this.props.nextPage - 20)
            this.props.SetCurrentPage(this.props.nextPage - 20)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.nextPage - 20}&&count=${this.props.pageSize}`).then(responce => {
                this.props.SetUsers(responce.data.items)
                this.props.SetTotalCount(responce.data.totalCount)
            })
        }
    }
    Forward = () => {
        if (!(this.props.currentPage + 20 > Math.ceil(this.props.totalCount / this.props.pageSize))) {
            this.props.NextPage(this.props.nextPage + 20)
            this.props.SetCurrentPage(this.props.nextPage)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.nextPage}&&count=${this.props.pageSize}`).then(responce => {
                this.props.SetUsers(responce.data.items)
                this.props.SetTotalCount(responce.data.totalCount)
            })
        }
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        ;
        return <div>
            <span onClick={(e) => {
                this.Back()
            }}>Back</span>

            {
                pages.map(p => {
                    if (p >= this.props.nextPage - 20 && p <= this.props.nextPage) {
                        return <span onClick={(e) => {
                            this.onPageChanged(p)
                        }} className={this.props.currentPage === p && s.activePage || s.numberPage}>{p}</span>
                    }

                })
            }
            <span onClick={() => {
                this.Forward()
            }}>Forward</span>
            {
                this.props.users.map(u => <div>
                <span>
                    <div><img className={s.img} src={u.photos.small != null ? u.photos.small : photo}/></div>
                <div>
                    {u.followed ? <button onClick={() => {
                        this.props.Unfollow(u.id)
                    }}>UnFollowed</button> : <button onClick={() => {
                        this.props.Follow(u.id)
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
}

export default Users;