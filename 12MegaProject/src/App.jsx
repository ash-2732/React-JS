import { useState , useEffect} from 'react'
import {  useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth.js'
import {login , logout} from './store/authSlice'
import { Footer, Header } from './components/index.js'


function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
      authService.getCurrentUser()
      .then((userData) => {
        if( userData){
            dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      })
      .finally(() => setloading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
