import { useSelector } from "react-redux";
import { selectAllPosts, selectPostByUser } from "../posts/postSlice";
import { selectUserById } from "./usersSlice";
import { Link, useParams } from "react-router-dom";


const UserPage = () => {

    const {userId} = useParams()

    const user=useSelector(state => selectUserById(state, +userId));

    const postsForUser= useSelector(state => selectPostByUser(state, +userId))
    
    // useSelector(state=> {

    //     const allPosts= selectAllPosts(state)
    //     return allPosts.filter(post => post.userId === +userId)

    // })

    const postTitle= postsForUser.map(post => (
        <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))

  return (
    <section>
        <h2>{user?.name}</h2>
        <ol>{postTitle}</ol>
    </section>
  )
}

export default UserPage