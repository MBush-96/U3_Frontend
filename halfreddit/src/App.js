import './App.css';

import Nav from './components/nav'
import Home from './pages/home'
import { Route } from 'react-router-dom'
import Signup from './pages/signup'
import {useState} from 'react'
import Login from './pages/login'
import { useContext } from 'react/cjs/react.development';
import { UserContext } from './context/userContext';

function App() {
  // const {globaluserState, fetchUser} = useContext(UserContext)
  // const [user, setUser] = globaluserState
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="App">
      <Nav />

      <Route
        path='/'
        exact
        render={() => 
          <Home />
        }
      />

      <Route
        path='/signup'
        exact
        render={() => 
          <Signup 
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        }
      />

      <Route
        path='/login'
        exact
        render={() => 
          <Login 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        }
      />
    </div>
  );
}

export default App;
