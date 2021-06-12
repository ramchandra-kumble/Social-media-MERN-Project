import React from "react"
import "./sidebar.css"
import {RssFeed, Chat, PlayCircleFilled, Group, Bookmark, Help, WorkOutline, Event, School} from "@material-ui/icons"
import CloseFriends from "../CloseFriends/CloseFriends"
import { Users } from "../../dummyData"

function Sidebar(){
 return(
     <div className="sidebar">
         <div className="sidebarWrap">
             <ul className="sidebarList">
                 <li className="sideListItem">
                     <RssFeed className="sidebarIcon"/>
                     <span className="listText">Feed</span>
                 </li>
                 <li className="sideListItem">
                     <Chat className="sidebarIcon"/>
                     <span className="listText">Chat</span>
                 </li>
                 <li className="sideListItem">
                     <PlayCircleFilled className="sidebarIcon"/>
                     <span className="listText">Videos</span>
                 </li>
                 <li className="sideListItem">
                     <Group className="sidebarIcon"/>
                     <span className="listText">Groups</span>
                 </li>
                 <li className="sideListItem">
                     <Bookmark className="sidebarIcon"/>
                     <span className="listText">Bookmarks</span>
                 </li>
                 <li className="sideListItem">
                     <Help className="sidebarIcon"/>
                     <span className="listText">Questions</span>
                 </li>
                 <li className="sideListItem">
                     <WorkOutline className="sidebarIcon"/>
                     <span className="listText">Jobs</span>
                 </li>
                 <li className="sideListItem">
                     <Event className="sidebarIcon"/>
                     <span className="listText">Events</span>
                 </li>
                 <li className="sideListItem">
                     <School className="sidebarIcon"/>
                     <span className="listText">Courses</span>
                 </li>

             </ul>
             <button className="sidebarButton">Show More</button>
             <hr className="sidebarHr"/>
             <ul className="sidebarFriendList">
              { Users.map((u) => (
                <CloseFriends key={u.id} user={u}/>
              ))  }
             </ul>
         </div>
     </div>
 )
}

export default Sidebar