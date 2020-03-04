import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    nextPageAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../Redux/users-reducer";

    let mapStateToProps = (state) => {
        return {
            users: state.usersPage.usersData,
            totalCount: state.usersPage.totalCount,
            currentPage: state.usersPage.currentPage,
            pageSize: state.usersPage.pageSize,
            nextPage: state.usersPage.nextPage
        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            Follow: (UserId) => {
                dispatch(followAC(UserId));
            },
            Unfollow: (UserId) => {
                dispatch (unfollowAC(UserId));
            },
            SetUsers: (users) => {
                dispatch (setUsersAC(users));
            },
            SetTotalCount: (count) => {
                dispatch (setTotalCountAC(count));
            },
            SetCurrentPage: (currentPage) => {
                dispatch (setCurrentPageAC(currentPage))
            },
            NextPage: (nextPage) => {
                dispatch (nextPageAC(nextPage))
            }
        }
    }
    const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;