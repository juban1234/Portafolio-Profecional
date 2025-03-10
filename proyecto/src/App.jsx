
import { Route,Routes } from 'react-router-dom'
import { Header } from './Components/layouts/Header/Header'
import { Footer } from './Components/layouts/Footer/Footer'
import { Home } from './Components/pages/Home/Home'
import { TecnnicalSkill } from './Components/pages/TecnnicalSkill/TecnnicalSkill'
import { TecnnicalSocial } from './Components/pages/TecnnicalSocial/TecnnicalSocial'
import {ProfessionalExp} from './Components/pages/ProfessionalExp/ProfessionalExp'
import {Studies} from './Components/pages/Studies/Studies'
import { NotFound } from './Components/pages/NotFound/NotFound'






export const App = () => {

  return (
      <>
      <Header/>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/TecnnicalSkill' element={<TecnnicalSkill/>}/>
            <Route path='/TecnnicalSocial' element={<TecnnicalSocial/>}/>
            <Route path='/ProfessionalExp' element={<ProfessionalExp/>}/>
            <Route path='/Studies' element={<Studies/>}/>
            <Route path='*' element={<NotFound/>}/>

          </Routes>
        <Footer/>
      </>
  )
}
