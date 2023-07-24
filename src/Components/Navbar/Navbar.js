import "../Navbar/navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import user from '../Navbar/userimage.jpg'
function Navbar({username}) {
  return (
    <div className='navbar'>
      <div className="wrapper">
       <p className="username">Welcome, {username?username:"Sendya Sana"}</p>
        <div className="items">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchIcon/>
        </div>
          <div className="item">
            <NotificationsNoneIcon className="icon"/>
          </div>
          <div className="item">
            <img src={user} alt="user" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
