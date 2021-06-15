import "./profile.css";
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
    <div>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src={`${PF}post/3.jpeg`} alt="" />
                        <img className="profileUserImg" src={`${PF}person/7.jpeg`} alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">My Name</h4>
                        <span className="profileInfoDesc">Helloo friend</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile />
                </div>
            </div>
       </div>
    </div>
    )
}
