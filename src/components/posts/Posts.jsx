import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {

//TEMPORARY DUMMY DATA

const posts = [
  {
      id: 1,
      name: "Tomide Oyekunle",
      userId: 1,
      img: "https://images.pexels.com/photos/16982925/pexels-photo-16982925/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "blablablabalbalabalabalabaa",
      profilePic: "https://images.pexels.com/photos/9037302/pexels-photo-9037302.jpeg"
  },
  {
      id: 2,
      name: "Tomide Oyekunle",
      userId: 2,
      img: "https://images.pexels.com/photos/16982925/pexels-photo-16982925/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "blablablabalbalabalabalabaa",
      profilePic: "https://images.pexels.com/photos/9037302/pexels-photo-9037302.jpeg"
  },

]



  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts