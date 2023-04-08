import 'tailwindcss/tailwind.css';
import  './style/globals.scss'
import { Route,Routes } from 'react-router-dom';
import { Layout } from './components';
import Home from './pages'
import PostDetail from './pages/PostDetail';
function App() {
  return (<Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path='post/:slug' element={<PostDetail />}></Route>    
      <Route path='category/:slug'></Route>    
    </Route>
  </Routes>
  )
}

export default App;
