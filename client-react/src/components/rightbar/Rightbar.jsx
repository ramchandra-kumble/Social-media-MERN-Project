import React, { useEffect, useState } from "react"
import "./rightbar.css"
import Online from "../Online/Online"
import { Users } from "../../dummyData"
import axios from "axios"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react";
import Button from '@material-ui/core/Button';



function Rightbar({ user }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const { user: currentUser , dispatch } = useContext(AuthContext);
    const [followed, setFollow] = useState(currentUser.followings.includes(user?._id));


    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            } catch (err) {
                console.log(err);
            }
        };
        getFriends();
    }, [user]);

    const handleFollow = async () => {
        try {
            if (followed) {
                await axios.put("/users/" + user._id + "/unfollow", { _id: currentUser._id });
                dispatch({ type : "UNFOLLOW" , payload : user._id });
            } else {
                await axios.put("/users/" + user._id + "/follow", { _id: currentUser._id });
                dispatch({ type : "FOLLOW" , payload : user._id });
            }

        } catch (err) {
            console.log(err)
        }
        setFollow(!followed);
    
    }

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={PF + "gift.png"} alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Midoriya</b> and <b>3 others friends</b> hava a birthday today
                    </span>
                </div>
                <img src={PF + "/ad.jpeg"} alt="" className="imgAd" />
                <div className="rightbarOnlineFriendList" >
                    <h4 className="rightbarTitle">Online friends</h4>
                    <ul className="rightbarFriendList">
                        {Users.map((u) => (
                            <Online key={u.id} user={u} />
                        ))}

                    </ul>
                </div>
            </>
        )
    }


    const ProfileRightbar = () => {
        return (
            <div>
                <div className="" >

                    {user.username !== currentUser.username && (
                        <Button onClick={handleFollow} className="rightbarFollowBtn" variant="outlined" color={ followed ? "secondary" : "primary"}>
                            {followed ? "Unfollow" : "Follow"}
                        </Button>
                        
                    )}
                </div>
                <h4 className="rightbarTitleInfo">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationships:</span>
                        <span className="rightbarInfoValue">{user.relationships === 1 ? "Single" : user.relationships === 2 ? "Married" : "-"}</span>
                    </div>
                    <div className="rightbarFollowingContainer">
                        <h4 className="rightbarTitlefriends">User friends</h4>
                        <div className="rightbarFollowings" >
                            {friends.map((friend) => (
                                <Link style={{ textDecoration: "none", color: "black" }} to={"/profile/" + friend.username} >
                                    <div className="rightbarFollowing">
                                        <img
                                            src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/no_avatar.png"}
                                            alt=""
                                            className="rightbarFollowingImg"
                                        />
                                        <span className="rightbarFollowingName">{friend.username}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrap">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar;