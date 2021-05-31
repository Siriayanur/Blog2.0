import Appbar from './components/Appbar/Appbar.jsx';
import Create from './Pages/Create/Create.jsx';
import Home from './Pages/Home/Home.jsx';
import Settings from './Pages/Settings/Settings.jsx';
import Single from './Pages/Single/Single.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import { Route } from 'react-router-dom'
function App() {
  const user = false;
  return (
    <div className="App">
      <Appbar />
      <Route exact path="/">
        {user ? <Home/> : <Register/>}
      </Route>
      <Route path="/login">
        {user ? <Home/> : <Login />}
      </Route>
      <Route path="/register">
        {user ? <Home/> : <Register />}
      </Route>
      <Route exact path="/settings">
        {user ? <Settings/> : <Register />}
      </Route>
      <Route exact path="/posts/:postId">
        {user ? <Single/> : <Register />}
      </Route>
      <Route exact path="/create">
        {user ? <Create/> : <Register />}
      </Route>
      
    </div>
  );
}

export default App;
