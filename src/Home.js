import React, {PureComponent as Component} from 'react';
import {Link} from 'react-router-dom';
import SignupForm from './SignupForm'

class Home extends Component{

  render(){
    return (
      <div>
        <h2>Sign Up page</h2>
        <SignupForm />
      </div>
    );
  }
}

export default Home;
