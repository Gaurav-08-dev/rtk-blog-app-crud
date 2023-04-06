import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


const SinglePagePost = ()=>{
    const {postId}=useParams();

    const post= useSelector((state)=> selectPostById(state,+postId))

    if(!post) return (<section><h2>Post not found! </h2></section>)


    return (
        <article>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
        <p className="postCredit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
            <PostAuthor userId={post.userId} />
            <TimeAgo timeStamp={post.date} />
        </p>
        <ReactionButtons post={post} />
    </article>
    )
}

export default SinglePagePost