import React,{Component} from 'react';
import './styles.scss';
import FormInput from '../form-input';
import CustomButton from '../custom-button';

import { connect } from 'react-redux';
import {
    googleSignInStart,
    emailSignInStart
  } from '../../redux/users/actions';

class Signin extends Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
        }

    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
    
        emailSignInStart(email, password);
      };

    handleChange=event=>{
        const{value,name}=event.target;

        this.setState({[name]:value})
    }
    render(){
        const{email,password}=this.state;
        const { googleSignInStart } = this.props;
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" name="email" type="email" value={email} required handleChange={this.handleChange}/>
                    <FormInput label="password" name="password" type="password" value={password} required handleChange={this.handleChange}/>

                    <div className="buttons">
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>

                    <CustomButton onClick={googleSignInStart} isGoogleSignIn>
                        Sign In with google
                    </CustomButton>

                    </div>
        
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password }))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(Signin);
// export default Signin;