import React from "react";
import propTypes from 'prop-types';
// import Ionicon from "react-ionicons";
import FacebookLogin from 'react-facebook-login';
import '../shared/formStyles.scss';

const LoginForm = (props, context) => (
    <div className="form-component">
      <form className="form" onSubmit={props.handleSubmit}>
        <input 
          type="text"
          placeholder={context.t("Username")} 
          className="text-input" 
          value={props.usernameValue}
          onChange={props.handleInputChange} 
          name="username"
        />
        <input
          type="password"
          placeholder={context.t("Password")}
          className="text-input"
          value={props.passwordValue}
          onChange={props.handleInputChange}
          name="password"
        />
        <input type="submit" value="Log in" className="button" />
      </form>
      <span className="divider">or</span>
      <FacebookLogin
        appId="388310035371042"
        autoLoad={false}
        fields="name,email,picture"
        callback={props.handleFacebookLogin}
        cssClass="facebook-link"
        icon="fa-facebook-official"
        textButton={context.t("Log in with Facebook")}
      /> 
      <span className="forgot-link">Forgot password?</span>
    </div>
  );

LoginForm.propTypes = {
  usernameValue: propTypes.string.isRequired,
  passwordValue: propTypes.string.isRequired,
  handleInputChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  handleFacebookLogin: propTypes.func.isRequired,
};

LoginForm.contextTypes = {
  t: propTypes.func.isRequired
};


export default LoginForm;