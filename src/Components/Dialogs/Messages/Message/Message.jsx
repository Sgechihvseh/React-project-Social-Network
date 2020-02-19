import React from 'react';
import s from "../../Dialogs.module.css"

const Message = (props) => {
    return (
        <div>
            <div className={s.receivedMessage}>
                <img className={s.img} src={props.src}/>
                {props.received}
            </div>
            <div className={s.sentMessage}>
                {props.sent}
                <img className={s.img} src={props.my_src}/>
            </div>
        </div>
    )
}

export default Message;