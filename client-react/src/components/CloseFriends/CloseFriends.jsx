import React from "react"
import "./closeFriends.css"

function CloseFriends ({user}) {
    return (
        <div>
               <li className="sidebarFriendItem">
                     <img src={user.profilePicture} alt="" className="friendImg"/>
                     <span className="friendName">{user.username}</span>
                 </li>
        </div>
    )
}


export default CloseFriends