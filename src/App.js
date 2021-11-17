
import './App.css';
import Header from './components/Header/index';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      if(authUser){// Login
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }else{// Log out
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  }, [])
  return (
      <Router>
          <div className="app">

            <Routes>
              <Route  path="/" element={<Home/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </div>
      </Router>
  );
}

export default App;
