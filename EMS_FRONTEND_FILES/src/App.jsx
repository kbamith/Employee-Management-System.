import ListEmployeeComponent from './components/ListEmployeeComponent'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import EmployeeComponent from './components/EmployeeComponent'
function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <h1 className='text-center'>I am Amith and I like React js</h1>
     <Routes>
      <Route path='/' element={<ListEmployeeComponent/>}></Route>
       <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
       <Route path='/employee' element={<ListEmployeeComponent/>}></Route>
       <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route> 
     </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
