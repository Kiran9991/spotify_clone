import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';

function App() {

  return (
    <div className='w-screen h-screen'>
      <BrowserRouter>
          <Routes>
            <Route 
                path='/'
                element={<div>Hello</div>}    
            />

            <Route 
                path='/login'
                element={<LoginComponent/>}    
            />
            <Route 
                path='/signup'
                element={<SignupComponent/>}    
            />

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
