import {Route, useHistory } from 'react-router-dom';
import React,{useEffect} from 'react';
import login from './pages/login';


const App = () => {
  const history = useHistory();

  // const App = ({ history }) => {
  // const redirect = () => {
  //   history.push('/login');
  // }

  const redirect = () => {
    history.push('/login');
  }
// login when page loads
  // useEffect( () =>
  // {
  //   history.push('/login');
  // }, [] )
  
  return (
    <div>
      <h1>Hi there!</h1>
      <Route path="/login" component={login}/>
      <login/>
      <button onClick={redirect}>Log in</button>
    </div>
  );
};

export default App;
