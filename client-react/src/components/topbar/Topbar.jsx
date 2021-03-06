import { Chat, Person, Search, Notifications } from "@material-ui/icons";
import "./topbar.css";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/"  style={{textDecoration: 'none'}}>
        <span className="Logo">Social</span>
      </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Searchbar" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link style= {{ textDecoration: "none", color: "white" } } to="/" >
          <span className="topbarLink">Homepage</span>
          </Link>
          <Link style={{textDecoration : "none", color: "white" } } to={`/profile/${user.username}`}>
          <span className="topbarLink">Timeline</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`} >
        <img
          src={
            user.profilePicture
            ? PF + user.profilePicture
            : PF + "person/no_avatar.png"
          } alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}
