import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { PrivateRoutes } from './PrivateRoute';
import { PublicRoutes } from './PublicRoute';
import { HomePage } from './components/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<HomePage />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
