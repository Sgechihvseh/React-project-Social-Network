import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink, Route} from "react-router-dom";

const DialogItems = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id} className={s.name} activeClassName={s.active}>
                <div>
                    <img className={s.img} src={props.src}/>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItems;