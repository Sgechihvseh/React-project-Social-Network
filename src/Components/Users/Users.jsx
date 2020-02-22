import React from "react";
import s from "./Users.module.css"

const Users = (props) => {
    if (props.users.length === 0) {
        props.SetUsers([{
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqFBoEXYUjcxgUBQxlwjRJlPMsMI5ZaKO2iHlInEl9giTFmZdvQ&s",
            followed: true,
            name: "Kolya",
            location: {country: "Belarus", city: "Brest"},
            status: "bike'n'roll"
        },
            {
                id: 2,
                img: "https://img.icons8.com/plasticine/2x/user.png",
                followed: false,
                name: "Pasha",
                location: {country: "Belarus", city: "Kwakenburg"},
                status: "ready to race"
            },
            {
                id: 3,
                img: "https://noguiltlife.com/wp-content/uploads/2019/11/baby-yoda-sipping-tea-meme-1-e1575123902614.jpg",
                followed: true,
                name: "Sanya",
                location: {country: "Belarus", city: "Kwakenburg"},
                status: "..."
            },
            {
                id: 4,
                img: "https://avatarfiles.alphacoders.com/651/thumb-65159.jpg",
                followed: false,
                name: "Sergey",
                location: {country: "Belarus", city: "Brest"},
                status: "Frontend-developer"
            }])
    }
    return <div>
        {
            props.users.map(u => <div>
                <span>
                    <div><img className={s.img} src={u.img}/></div>
                <div>
                    {u.followed ? <button onClick={() => {
                        props.Unfollow(u.id)
                    }}>UnFollowed</button> : <button onClick={() => {
                        props.Follow(u.id)
                    }}>Followed</button>}
                </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;