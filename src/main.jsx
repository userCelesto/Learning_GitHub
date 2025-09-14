import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomeDashboard from './Pages/HomeDashboard.jsx'
import Settings from './Pages/Settings.jsx'
import Calendar from './Pages/Calendar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index:true, element:<HomeDashboard />},
      {path:'h', element:<  HomeDashboard />},
      {path:'h/archived', element: <div>This is a page for archived classes</div>},
      {path:'calendar', element: <Calendar />},
      {path:'s', element: <Settings />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
