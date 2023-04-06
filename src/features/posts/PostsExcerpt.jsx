import React from 'react';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPostById } from './postSlice';

const PostsExcerpt = ({ postId }) => {

    const post=useSelector(state => selectPostById(state,postId))
    return (
        <article>
            <h2>{post.title}</h2>
            <p className='excerpt'>{post.body.substring(0, 75)}</p>
            <p className="postCredit"> 
            <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

// PostsExcerpt= React.memo(PostsExcerpt) //! we will use normalize state

export default PostsExcerpt