import React from 'react';
import {addMessage, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageActionCreator())
//         },
//         updateNewMessageText: (text) => {
//             dispatch(updateNewMessageTextActionCreator(text))
//         }
//     }
// }

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs)

export default DialogsContainer;