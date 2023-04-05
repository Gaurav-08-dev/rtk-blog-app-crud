// import './App.css'
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePagePost from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';
import Layout from './components/Layout';
import { Routes, Route, Navigate } from "react-router-dom";
import UserList from './features/users/UsersList';
import UserPage from './features/users/UserPage';

function App() {

  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePagePost />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UserList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
