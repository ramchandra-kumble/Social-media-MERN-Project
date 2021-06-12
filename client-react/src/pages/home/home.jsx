import React from "react"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import "./Home.css"



function Home () {
    return (
        <div>
       <Topbar />
       <div className="homeContainer">
       <Sidebar />
       <Feed />
       <Rightbar />
       </div>
       
      
       </div>
    )
}

export default Home