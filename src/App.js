import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';

// pages & components
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  {!user && <Navigate to='/login' />}
                  {user && <Home />}
                </>
              }
            />
            <Route
              path='/login'
              element={
                <>
                  {user && <Navigate to='/' />}
                  {!user && <Login />}
                </>
              }
            />
            <Route
              path='/signup'
              element={
                <>
                  {user && <Navigate to='/' />}
                  {!user && <Signup />}
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
