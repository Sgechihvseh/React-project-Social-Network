import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";

    let mapStateToProps = (state) => {
        return {
            users: state.usersPage.usersData
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
            }
        }
    }
    const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;