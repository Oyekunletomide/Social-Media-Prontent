import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import "./comments.scss"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            name: "Tomide Oyekunle",
            userId: 1,
            desc: "blablablabalbalabalabalabaa",
            profilePicture: "https://images.pexels.com/photos/9037302/pexels-photo-9037302.jpeg"
        },
        {
            id: 2,
            name: "Tomide Oyekunle",
            userId: 2,
            desc: "blablablabalbalabalabalabaa",
            profilePicture: "https://images.pexels.com/photos/9037302/pexels-photo-9037302.jpeg"
        },
      
      ]


  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="write a comment" />
            <button>Send</button>
        </div>



        {comments.map((comment) =>(
            <div className="comment">
                <img src={comment.profilePicture} alt=""/>
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments