import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostStatus, getPostsError, 
    // fetchPosts 
} from "./postSlice";

import PostsExcerpt from "./PostsExcerpt";


const PostsList = () => {

    // const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts) // post 
    const postStatus = useSelector(getPostStatus); // status of the post
    const error = useSelector(getPostsError); // error if any while fetching post
    

    let content;

    if (postStatus === 'idle') {
        content = <p>Loading...</p>
    }
    else if (postStatus === 'succeeded') {
        const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content=orderedPost.map(post => <PostsExcerpt key={post.title} post={post}/>)
    }
    else if(postStatus === 'failed'){
        content=<p>{error}</p>
    }

    // useEffect(() => {
    //     console.log(postStatus)
    //     if (postStatus === 'idle') dispatch(fetchPosts())
    // }, [postStatus, dispatch])

    return (
        <section>
            {/* <h2>Posts</h2> */}
            {content}
        </section>
    )
}

export default PostsList