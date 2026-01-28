import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router';

import  Navbar from './components/Navbar';
import TodoPage from './pages/todo';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/todo' element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
