import { StrictMode,  } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useSelector } from "react-redux"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, Signup, Home, Profile, CreatePostForm} from './pages/index.js';
import { PostContainer} from "./components/"
import {store, persistor } from "./store/store.js"
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/create",
        element:<CreatePostForm/>
      },
      {
        path:"/post/:postid",
        element:<PostContainer/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={(<div>Loading...</div>)} persistor={persistor} >
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
    <ToastContainer/>
  </StrictMode>,
)
