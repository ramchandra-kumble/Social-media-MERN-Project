import React from "react"
import "./rightbar.css"
import Online from "../Online/Online"
import { Users } from "../../dummyData"
import { useState, useEffect } from "react";
import axios from "axios";

function Rightbar({username}){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
 
 const HomeRightbar = () => {
     return (
         <>
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
        </>
     )
 }

 
    const ProfileRightbar = () => {
         return( 
             <div>
                 <h4 className="rightbarTitleInfo">User Information</h4>
                 <div className="rightbarInfo">
                     <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City</span>
                         <span className="rightbarInfoValue">{username.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                         <span className="rightbarInfoValue">{username.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationships:</span>
                         <span className="rightbarInfoValue">{username.relationships===1 ? "Single" : username.relationships ===2 ? "Married" : "-" }</span>
                    </div>
                    <div className ="rightbarFollowingContainer"> 
                        <h4 className="rightbarTitlefriends">User friends</h4>
                        <div className="rightbarFollowings">
                            <div className="rightbarFollowing">
                                <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">John Carter</span>
                            </div>
                            <div className="rightbarFollowing">
                                <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">John Carter</span>
                            </div>
                            <div className="rightbarFollowing">
                                <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">John Carter</span>
                            </div>
                            <div className="rightbarFollowing">
                                <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">John Carter</span>
                            </div>
                            <div className="rightbarFollowing">
                                <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">John Carter</span>
                            </div>
                            <div className="rightbarFollowing">
                                <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">John Carter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
 
    return(
     <div className="rightbar">
         <div className="rightbarWrap">
             {username ? <ProfileRightbar /> : <HomeRightbar />} 
         </div>
     </div>
 )
}

export default Rightbar;