import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (props.profile.lookingForAJob) {

    }
    return <div>
        <div className={s.imgWrapper}>
            <img src='https://prnjavorlive.info/wp-content/uploads/2019/05/zelengora.jpg'/>
        </div>
        <div className={s.description}>

            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                <div>
                    <div>{props.profile.aboutMe ?
                        <div>
                            <div>About me:</div>
                            <p>{props.profile.aboutMe}</p>
                        </div>
                        : console.log('aboutMe is empty')}
                    </div>
                </div>
                <div>
                    <div>{props.profile.lookingForAJob ?
                        <div>
                            <div>Looking for a job status:</div>
                            <p>{props.profile.lookingForAJobDescription}</p>
                        </div>
                        : console.log('lookingForAJobDescription is empty')}
                    </div>

                </div>
                <div>
                    <div>{props.profile.fullName ?
                        <div>
                            <div>Full name:</div>
                            <p>{props.profile.fullName}</p>
                        </div>
                        : console.log('fullname is empty')}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileInfo;
