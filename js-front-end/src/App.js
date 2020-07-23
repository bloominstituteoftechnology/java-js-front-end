import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login';
import getUserInfo from './components/UserInfo';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div className="App">

      <Route path="/login" component = {Login} />
      <ProtectedRoute path="/userinfo" component = {getUserInfo} />

    </div>
  );
}

export default App;
