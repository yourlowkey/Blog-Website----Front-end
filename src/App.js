import 'tailwindcss/tailwind.css';
import  './style/globals.scss'
import { Route,Routes } from 'react-router-dom';
import { Layout } from './components';
import Home from './pages'
import PostDetail from './pages/PostDetail';
import {CreateBlog,Dashboard} from './pages/admin'
function App() {
  return (<Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path='post/:slug' element={<PostDetail />}></Route>    
      <Route path='category/:slug'></Route>    
    </Route>
    <Route path="/admin" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="createBlog" element={<CreateBlog />} />
    </Route>
  </Routes>
  )
}

export default App;
