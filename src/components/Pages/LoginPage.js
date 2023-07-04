import React, { useState } from 'react';

import EmployeeDataService from '../../services/EmployeeDataService';
import { doLogin } from '../../auth';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = () => {
    EmployeeDataService.login(username, password)
      .then(response => {
        // Handle successful login
        console.log(response.data);
       
//save the date to localstorage
doLogin(response.data,()=>{
  console.log("token saved");
})



      
      })
      .catch(error => {
        // Handle login error
        console.log(error);
        setErrorMessage('Invalid username or password');
      });
  };

  return (
    <div className="container" style={{ marginTop: '70px'}}>
      <div>
        <h2>Login</h2>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
