import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/write' element={<CreatePost />} />
        <Route path='/posts/post/:id' element={<PostDetails />}></Route>
        <Route path='/edit/:id' element={<EditPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
