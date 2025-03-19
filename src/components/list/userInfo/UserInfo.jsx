import { useChatStore } from "../../../lib/chatStore";
import { auth } from "../../../lib/firebase";
import { useUserStore } from "../../../lib/userStore";
import "./userInfo.css";

const UserInfo = () => {

  const {currentUser} = useUserStore(); 

  const handleLogout = () => {
    auth.signOut();
  };
  
  const {chatId} = useChatStore();
  

  return (
    <div className="userInfo">
        <div className="user">
          <img src= {currentUser.avatar || "./defaultavatar.png"}  alt=""/>
          <h2>{currentUser.username}</h2>
        </div>
        {!chatId &&<div className="icons">
          <button className="logout" onClick={handleLogout}>
            Logout
          </button> 
        </div>}
    </div>
  )
}

export default UserInfo