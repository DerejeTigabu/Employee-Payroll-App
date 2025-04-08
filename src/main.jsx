import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Routing
import {createBrowserRouter,RouterProvider} from "react-router-dom";

 //Routes
 import Index from './routes/Index.jsx';
 import Root from './routes/Root.jsx';

import ErrorPage from './ErrorPage.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Personal from './routes/Personal.jsx';
import Contact from './routes/Contact.jsx';
import Logout from './routes/Logout.jsx';
 const router = createBrowserRouter([
  {
    path: "/", 
    //element: <App />,
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [{index: true, element: <Index/>},
                {path: "home", element: <Home/>},
                {path: "about", element: <About />},
                {path: "contact", element: <Contact />},
                {path: "personal", element: <Personal />},
                {path: "logout", element: <Logout />},

               ]}
      //  {index: true, element: <Index />}
  // /children: [
  //  {index: true, element: <Index />} 
     // {path: "home", element: <Home />},
     // {path: "about", element: <About />},
     // {path: "contact", element: <Contact />},
     // {path: "personal", element: <Personal />},
     // {path: "login", element: <Login />},
     // {path: "*", element: <ErrorPage />}
   // ]},
 // {path: "/about", element: <About />},
  //{path: "/contact", element: <Contact />},
  //{path: "/personal", element: <Personal />},
  //{path: "/login", element: <Login />},
  //{path: "*", element: <ErrorPage />}
 ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App />*/}
   <RouterProvider router={router}/>
  </StrictMode>,
)
