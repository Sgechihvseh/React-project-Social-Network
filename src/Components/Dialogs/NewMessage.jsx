import React from 'react';
import s from "./Dialogs.module.css";


const NewMessage = (props) => {
    // console.log(props.n)
    return (
        <div className={s.sentMessage}>
            {props.NewMessage}
            <img className={s.img} src={props.src}/>
        </div>

    )
}

export default NewMessage;