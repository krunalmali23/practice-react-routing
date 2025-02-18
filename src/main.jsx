import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Componenets/Home/Home.jsx'
import About from './Componenets/About/About.jsx'
import Contact from './Componenets/Contact/Contact.jsx'
import User from './Componenets/User/User.jsx'
import Github,{githubInfoLoader} from './Componenets/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     Element: <Layout/>,
//     Children:[
//     {
//       path:"",
//       Element: <Home/>
//     },
//     {
//       path:"about",
//       Element: <About/>
//     }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
  
   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
