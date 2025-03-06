
import { Route,Routes } from 'react-router-dom'
import { Header } from './Components/layouts/Header/Header'
import { Footer } from './Components/layouts/Footer/Footer'
import { Home } from './Components/pages/Home/Home'



export const App = () => {

  return (
      <>
        <Header/>
          <Routes>

            <Route path='/' element={<Home/>}/>

          </Routes>
        <Footer/>
      
      </>
  )
}
