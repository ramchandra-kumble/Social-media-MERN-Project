import React from "react"
import "./rightbar.css"
import Online from "../Online/Online"
import { Users } from "../../dummyData"

function Rightbar(){
 return(
     <div className="rightbar">
         <div className="rightbarWrap">
             <div className="birthdayContainer">
                 <img src="assets/gift.png" alt="" className="birthdayImg"/>
                 <span className="birthdayText">
                     <b>Midoriya</b> and <b>3 others friends</b> hava a birthday today
                 </span>
             </div>
             <img src="assets/ad.png" alt="" className="imgAd"/>
             <h4 className="rightbarTitle">Online friends</h4>
             <ul className="rightbarFriendList">
               {Users.map((u) =>(
                   <Online key={u.id} user={u} />
               ))}
             
             </ul>
         </div>
     </div>
 )
}

export default Rightbar