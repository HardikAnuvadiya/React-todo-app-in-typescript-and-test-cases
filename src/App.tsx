import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { Todo } from './components/Todo/Todo';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { PrivateRoutes } from './PrivateRoute';

function App() {
  

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Todo />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
