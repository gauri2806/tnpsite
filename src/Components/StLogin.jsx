import React from 'react';
import './StLogin.css';

var isEU = false;
function scrSwitchToCA () {
  isEU = false; 
}
function scrSwitchToEU () {
  isEU = true;
}

class Links extends React.Component {
  render () {
    return(
      <div className="d-flex justify-content-center">
        <div className="btn login-link" id="login-eu" onClick={scrSwitchToCA}>Existing User</div>
        <div className="btn login-link" id="login-ca" onClick={scrSwitchToEU}>Create Account</div>
      </div>
    )
  }
}

class UExistingForm extends React.Component {
  render () {
    return (
      <div>
        <label>Full Name:</label>
      </div>
    )
  }
}

class UNewForm extends React.Component {
  render () {
    return (
      <div>
        w
      </div>
    )
  }
}

export default function StLogin () {
return(<>

<div className="login-bg d-flex justify-content-md-center align-items-center vh-100">
  <div className="login-main">
    <div className="login-nav">
      <Links />
      {isEU ? <UExistingForm /> : <UNewForm />}
    </div>
  </div>
</div>

</>);
}