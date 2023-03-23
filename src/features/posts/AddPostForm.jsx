import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from './postSlice';
import { selectAllUsers } from "../users/usersSlice"
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {

    const navigate=useNavigate()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const [addRequestStatus,setAddRequestStatus]=useState('idle')


    const users = useSelector(selectAllUsers)
    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const canSave = [title,content,userId].every(Boolean) && addRequestStatus==='idle';

    const onSavePostClicked = () => {

        if(canSave){
            try{
                setAddRequestStatus('pending')

                dispatch(
                    addNewPost({title, body:content, userId})
                )
                setTitle('')
                setContent('')
                setUserId('')
                navigate('/')
                
            }
            catch(err){
                console.log('Failed to save the post', err)
            }finally{
                setAddRequestStatus('idle')
            }
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const dispatch = useDispatch();

    return (
        <section>
            <h2>Add a New Post</h2>
            <form >
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    id="postTitle"
                    name="postTitle"
                    type="text"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChanged}
                >
                    <option value=""></option>
                    {userOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <input
                    id="postContent"
                    name="postContent"
                    type="text"
                    value={content}
                    onChange={onContentChanged}
                />
            </form>
            <button
                type='button'
                onClick={onSavePostClicked}
                disabled={!canSave}
            >
            Save Post
            </button>

        </section>
    )
}

export default AddPostForm