import React,{Component} from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { signUpStart } from '../../redux/users/actions';
import { connect } from 'react-redux';
import './styles.scss';

class Signup extends Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email: '',
            password:'',
            confirmPassword:'',
        }
    }

    handleSubmit=async event=>{
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        signUpStart({ displayName, email, password });
    }

    handleChange=event=>{
        const {name, value}=event.target;

        this.setState({[name]:value});
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                    type='text'
                    name ='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='text'
                    name ='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Emai'
                    required
                />
                <FormInput
                    type="password" 
                    name ='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                />

                <FormInput
                   type="password" 
                    name ='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'> SIGN UP</CustomButton>
            </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(Signup);