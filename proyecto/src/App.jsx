
import { Route,Routes } from 'react-router-dom'
import { Header } from './Components/layouts/Header/Header'
import { Footer } from './Components/layouts/Footer/Footer'
import { Home } from './Components/pages/Home/Home'
import { TecnnicalSkill } from './Components/pages/TecnnicalSkill/TecnnicalSkill'



export const App = () => {

  return (
      <>
        <Header/>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/TecnnicalSkill' element={<TecnnicalSkill/>}/>
            
          </Routes>
        <Footer/>
      
      </>
  )
}
