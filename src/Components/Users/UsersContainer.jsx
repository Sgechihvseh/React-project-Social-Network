import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    nextPageAC,
    setCurrentPageAC, setFetchingAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.SetFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&&count=${this.props.pageSize}`).then(responce => {
            this.props.SetUsers(responce.data.items)
            this.props.SetTotalCount(responce.data.totalCount)
            this.props.SetFetching(false)
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.SetCurrentPage(pageNumber);
        if (pageNumber % 20 == 0) {
            this.props.NextPage(pageNumber + 20)
        }
        this.props.SetFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&&count=${this.props.pageSize}`).then(responce => {
            this.props.SetUsers(responce.data.items)
            this.props.SetTotalCount(responce.data.totalCount)
            this.props.SetFetching(false)
        })
    }
    Back = () => {
        if (this.props.currentPage >= this.props.nextPage - 20 && this.props.nextPage - 20 > 0) {
            this.props.NextPage(this.props.nextPage - 20)
            this.props.SetCurrentPage(this.props.nextPage - 20)

            if (!(this.props.currentPage == this.props.nextPage - 20)) {
                this.props.SetFetching(true)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.nextPage - 20}&&count=${this.props.pageSize}`).then(responce => {
                    this.props.SetUsers(responce.data.items)
                    this.props.SetTotalCount(responce.data.totalCount)
                    this.props.SetFetching(false)
                })
            }
        }
    }
    Forward = () => {
        if (!(this.props.currentPage + 20 > Math.ceil(this.props.totalCount / this.props.pageSize))) {
            this.props.NextPage(this.props.nextPage + 20)
            this.props.SetCurrentPage(this.props.nextPage)
            if (!(this.props.currentPage == this.props.nextPage)) {
                this.props.SetFetching(true)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.nextPage}&&count=${this.props.pageSize}`).then(responce => {
                    this.props.SetUsers(responce.data.items)
                    this.props.SetTotalCount(responce.data.totalCount)
                    this.props.SetFetching(false)
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
                Unfollow={this.props.Unfollow}
                Follow={this.props.Follow}
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
let mapDispatchToProps = (dispatch) => {
    return {
        Follow: (UserId) => {
            dispatch(followAC(UserId));
        },
        Unfollow: (UserId) => {
            dispatch(unfollowAC(UserId));
        },
        SetUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        SetTotalCount: (count) => {
            dispatch(setTotalCountAC(count));
        },
        SetCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        NextPage: (nextPage) => {
            dispatch(nextPageAC(nextPage))
        },
        SetFetching: (isFetching) => {
            dispatch(setFetchingAC(isFetching))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
