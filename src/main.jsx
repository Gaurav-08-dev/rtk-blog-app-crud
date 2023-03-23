import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import { store } from "./app/store";
import { fetchPosts } from './features/posts/postSlice';
import { fetchUsers } from './features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

store.dispatch(fetchPosts())
store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/*' element={<App/>} />
      </Routes>
    </Router>
  </Provider>
  ,
)
