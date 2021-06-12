import React from "react";
import "./online.css"



function Online ({user}) {
    return (
        <div>
              <li className="rightbarFriendItem">
                     <div className="rightbarImgContainer">
                         <img src={user.profilePicture} alt="" className="rightbarProfileImg"/>
                         <span className="rightbarOnline"></span>
                     </div>
                     <span className="rightbarUsername">{user.username}</span>
                 </li>
                
        </div>
    )
}

export default Online