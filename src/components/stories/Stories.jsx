import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import "./stories.scss"

const Stories = () => {
    const {currentUser} = useContext(AuthContext)


    //TEMPORARY DUMMY DATA

    const stories = [
        {
            id: 1,
            name: "Tomide Oyekunle",
            img: "https://images.pexels.com/photos/16982925/pexels-photo-16982925/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "Tomide Oyekunle",
            img: "https://images.pexels.com/photos/16982925/pexels-photo-16982925/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            name: "Tomide Oyekunle",
            img: "https://images.pexels.com/photos/16982925/pexels-photo-16982925/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            name: "Tomide Oyekunle",
            img: "https://images.pexels.com/photos/16982925/pexels-photo-16982925/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]

  return (
    <div className="stories">
        <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
        </div>
        {stories.map(story =>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories