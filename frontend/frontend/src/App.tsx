import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Signup } from './pages/Signup.tsx'
import { Signin } from './pages/Signin.tsx'
import { Blog } from './pages/Blog.tsx'
import { Blogs } from './pages/blogs.tsx'
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>

      <Routes>
          <Route path = "/signup"  element = {<Signup/>}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
