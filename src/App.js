import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
function App() {
  function responseGoogle(response){
    console.log(response);
  }
  function responseFacebook(response){
    console.log(response);
  }
  return (
    <div className="App">
    <div className="auth-wrapper">
      <div className="auth-inner">
            <form>
                <h3 className="centertext">Sign Up</h3>

                <div className="">
                  <h2 className="centertext">Create your account</h2>
                  <p className="centertext">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="row">
                <div className="col-lg-6">
                <div className="pull-left">
                <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Sign up google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </div>
  </div>
  <div className="col-lg-6">
  <div className="pull-right">
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
    textButton="Sign up with facebook"
  />
  </div>
  </div>
  </div>
  <hr/>

                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <p className="terms">By clicking sign up you agree to our term and condition</p>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default App;
