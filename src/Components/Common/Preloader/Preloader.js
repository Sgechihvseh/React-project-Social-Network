import s from "../../Users/Users.module.css";
import preloader from "../../../images/throbber_12.gif";
import React from "react";

const Preloader = (props) => {
    return <div>
        <img className={s.preloaderImg} src={preloader}/>
    </div>
}

export default Preloader;