import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://prnjavorlive.info/wp-content/uploads/2019/05/zelengora.jpg'/>
        </div>
        <div className={s.description}>
            <img src='https://pbs.twimg.com/profile_images/690989589335511044/i9muSIqm_400x400.jpg'/>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;
