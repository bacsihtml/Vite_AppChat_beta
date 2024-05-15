import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore";
import { useState } from "react";
import { auth } from "../../../lib/firebase";

const Userinfo = () => {

  const { currentUser } = useUserStore();
  const [showmore, setShowmore] = useState(false)

  const toggleShowmore = () => {
    setShowmore(!showmore)
  }

  const handleLogout = () => {
    auth.signOut();
    resetChat()
  };

  return (
    <div className='userInfo'>
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <span><img src="./more.png" alt="" onClick={toggleShowmore}/></span>
        <div className={`showmore ${showmore ? 'showactive' : ''}`}>
          <div className="setting">Setting</div>
          <div className="longout" onClick={handleLogout}>Longout</div>
        </div>
        <img src="./video.png" alt=""/>
        <img src="./edit.png" alt=""/>
      </div>
    </div>
  )
}

export default Userinfo