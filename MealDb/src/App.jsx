
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './components/routes'

function App() {

  return (
    <div className='max-w-[1140px] mx-auto my-8'>
    <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
