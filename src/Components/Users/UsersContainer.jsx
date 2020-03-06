import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    nextPages,
    setCurrentPage,
    setFetching,
    setTotalCount,
    setUsers,
    unfollow
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setTotalCount(responce.data.totalCount)
            this.props.setFetching(false)
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        if (pageNumber % 20 == 0) {
            this.props.nextPages(pageNumber + 20)
        }
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setTotalCount(responce.data.totalCount)
            this.props.setFetching(false)
        })
    }
    Back = () => {
        if (this.props.currentPage >= this.props.nextPage - 20 && this.props.nextPage - 20 > 0) {
            this.props.nextPages(this.props.nextPage - 20)
            this.props.setCurrentPage(this.props.nextPage - 20)

            if (!(this.props.currentPage == this.props.nextPage - 20)) {
                this.props.setFetching(true)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.nextPage - 20}&&count=${this.props.pageSize}`).then(responce => {
                    this.props.setUsers(responce.data.items)
                    this.props.setTotalCount(responce.data.totalCount)
                    this.props.setFetching(false)
                })
            }
        }
    }
    Forward = () => {
        if (!(this.props.currentPage + 20 > Math.ceil(this.props.totalCount / this.props.pageSize))) {
            this.props.nextPages(this.props.nextPage + 20)
            this.props.setCurrentPage(this.props.nextPage)
            if (!(this.props.currentPage == this.props.nextPage)) {
                this.props.setFetching(true)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.nextPage}&&count=${this.props.pageSize}`).then(responce => {
                    this.props.setUsers(responce.data.items)
                    this.props.setTotalCount(responce.data.totalCount)
                    this.props.setFetching(false)
                })
            }
        }
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader/> : null}

            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                Back={this.Back}
                nextPage={this.props.nextPage}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                Forward={this.Forward}
                users={this.props.users}
                Unfollow={this.props.unfollow}
                Follow={this.props.follow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        nextPage: state.usersPage.nextPage,
        isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         Follow: (UserId) => {
//             dispatch(followAC(UserId));
//         },
//         Unfollow: (UserId) => {
//             dispatch(unfollowAC(UserId));
//         },
//         SetUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         SetTotalCount: (count) => {
//             dispatch(setTotalCountAC(count));
//         },
//         SetCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         NextPage: (nextPage) => {
//             dispatch(nextPageAC(nextPage))
//         },
//         SetFetching: (isFetching) => {
//             dispatch(setFetchingAC(isFetching))
//         }
//     }
// }
export default connect(mapStateToProps,
    {follow,
    nextPages,
    setCurrentPage,
    setFetching,
    setTotalCount,
    setUsers,
    unfollow})(UsersContainer)
