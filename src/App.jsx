import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GlobalContext from './contexts/GlobalContext.jsx'

import Home from './pages/Home.jsx'
import Posts from './pages/Posts.jsx'
import PostPage from './pages/PostPage.jsx'

import About from './pages/About.jsx'
import DefaultLayout from './pages/DefaultLayout.jsx'
import AddNewPost from './pages/AddNewPosts.jsx'


import './App.css'



function App() {


 

  return (
    <>

      <GlobalContext.Provder value={{Posts}}>

        

      </GlobalContext.Provder>

      <BrowserRouter>

      <Routes >
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />}> Home</Route>
          <Route path="/posts" element={<Posts />}> Posts</Route>
          <Route path="/about" element={<About />}> Chi Siamo</Route>
          <Route path='/:slug' element={<PostPage />} />
          <Route path='/newpost' element={<AddNewPost />} />
        </Route>


        {/*<Route path="/posts"> rotta per solo i post
          <Route index element={<Posts />} />
          
                 
        </Route>*/}
        

        <Route path='/newpost' element={<AddNewPost />} />
      </Routes>



</BrowserRouter>
      
      
      
    </>
  )
}

export default App
