import React from 'react';
import {Route} from "react-router-dom";
import Message from "./Message/Message";


const Messages = (props) => {

    return (
        <div>
            <Route path={"/dialogs/" + props.id} render={() => <Message my_src={props.my_src} src={props.src} sent={props.sent} received={props.received}/>}/>
        </div>
    )
}

export default Messages;