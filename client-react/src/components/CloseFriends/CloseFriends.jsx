import React from "react"
import "./closeFriends.css"

function CloseFriends ({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
               <li className="sidebarFriendItem">
                     <img src={PF+user.profilePicture} alt="" className="friendImg"/>
                     <span className="friendName">{user.username}</span>
                 </li>
        </div>
    )
}


export default CloseFriends