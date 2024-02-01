
import './App.css'
import Form from './Form'
import Display from './Display'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Game from './Game'
function App() {
  

  return (
    <>
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Form/>}/>
  <Route path='/' element={<Display />}/>
  <Route path='/game' element={<Game/>}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
