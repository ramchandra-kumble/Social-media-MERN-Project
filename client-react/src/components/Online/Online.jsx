import React from "react";
import "./online.css"



function Online ({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
              <li className="rightbarFriendItem">
                     <div className="rightbarImgContainer">
                         <img src={PF + user.profilePicture} alt="" className="rightbarProfileImg"/>
                         <span className="rightbarOnline"></span>
                     </div>
                     <span className="rightbarUsername">{user.username}</span>
                 </li>
                
        </div>
    )
}

export default Online