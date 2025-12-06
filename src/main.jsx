import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutComponent from './components/AboutComponent.jsx'
import ContactPage from './pages/ContactPage.jsx'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
         path:'/about',
         element:<AboutComponent></AboutComponent>
        },
        {
          path:'/contact',
          element:<ContactPage></ContactPage>
        }
      ]
    }
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
