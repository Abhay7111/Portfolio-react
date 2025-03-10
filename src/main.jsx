import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'

const routes = createBrowserRouter([
  {path:'/', element:<App/>, children:[
    {path:'', element:<Home/>},
    {path:'about', element:<About/>},
    {path:'projects', element:<Projects/>},
    {path:'*', element:'404'}
  ]},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
