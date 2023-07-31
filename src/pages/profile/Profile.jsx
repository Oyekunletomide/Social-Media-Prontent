import "./profile.scss"
import { FacebookTwoTone } from "@mui/icons-material"
import { LinkedIn } from "@mui/icons-material"
import { Instagram } from "@mui/icons-material"
import { Pinterest } from "@mui/icons-material"
import { Twitter } from "@mui/icons-material"
import { Place } from "@mui/icons-material"
import { Language } from "@mui/icons-material"
import EmailOutlined from "@mui/icons-material/EmailOutlined"
import { MoreVert } from "@mui/icons-material"
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/9037302/pexels-photo-9037302.jpeg" alt="" className="cover" />
        <img src="https://images.pexels.com/photos/9037302/pexels-photo-9037302.jpeg" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoTone fontSize="medium" />
            </a>
            <a href="http://instagram.com">
              <Instagram fontSize="medium" />
            </a>
            <a href="http://twitter.com">
              <Twitter fontSize="medium" />
            </a>
            <a href="http://linkedin.com">
              <LinkedIn fontSize="medium" />
            </a>
            <a href="http://pinterest.com">
              <Pinterest fontSize="medium" />
            </a>
          </div>
          <div className="center">
            <span>Tomide Oye</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>USA</span>
              </div>

              <div className="item">
                <Language />
                <span>Tommy.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile