import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const containerStyle = {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    alignItems: 'center',
    backgroundColor: 'rgb(22, 21, 21)',
    borderRadius: '15px',
    padding: '25px 10px',
    boxShadow: '0 0 15px rgb(80, 79, 79)',
  };

  const inputStyle = {
    height: '50px',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    margin: '10px',
    textAlign: 'center',
    fontSize: '20px',
    color: 'white',
    backgroundColor: 'rgb(48, 46, 46)',
  };

  const buttonStyle = {
    backgroundColor: 'rgb(0, 0, 0)',
    color: 'white',
    border: 'none',
    padding: '8px 30px',
    borderRadius: '10px',
    fontSize: '18px',
    cursor: 'pointer',
    margin: '5px 25px',
  };

  const handleSignUpClick = () => {
    history.push('/registration');
  };

  const handleLoginClick = () => {
    history.push('/home');
  };

  return (
    <div style={{ paddingTop: '25vh' }}>
      <div style={containerStyle} className="container">
        <h2>Login</h2>
        <form action="">
          <input type="text" name="username" id="username" placeholder="Enter your username" style={inputStyle} />
          <input type="password" name="pass" id="pass" placeholder="Enter your password" style={inputStyle} />
          <div className="buttons btns">
            <button type="button" onClick={handleLoginClick} style={buttonStyle}>Login</button>
            <button type="button" onClick={handleSignUpClick} style={buttonStyle}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
