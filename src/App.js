import React from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './pages/login';
import Register from './pages/register';
import Blogs from './pages/blogs';
import Create from './pages/create';
import Single from './pages/single';

function App(){

  return(
    <div>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={(history) => <Login history={history}/> } />  
            <Route exact path="/register" component={(history) => <Register  history={history}/> } />
            <Route exact path="/blogs" component={(history) => <Blogs  history={history}/> } />
            <Route exact path="/create" component={(history) => <Create  history={history}/> } />
            <Route exact path="/single/:id" component={(history) => <Single  history={history}/> } />
          </Switch> 
        </div>
      </BrowserRouter>
      <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          closeOnClick
          pauseOnHover
      />
    </div>
  )
}

export default App;
