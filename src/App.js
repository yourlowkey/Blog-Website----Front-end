import 'tailwindcss/tailwind.css';
import  './style/globals.scss'
import { Route,Routes } from 'react-router-dom';
import { Layout } from './components';
import Home from './pages'
function App() {
  return (<Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path='category/:slug'></Route>    
      <Route path='post/:slug'></Route>    
    </Route>
  </Routes>
  )
}

export default App;
