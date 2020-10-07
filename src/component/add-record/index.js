import React,{Component} from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { addRobotsStart } from '../../redux/robots/actions';
import { connect } from 'react-redux';
import './styles.scss';

class Addrecord extends Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email: '',
            username:'',
        }
    }

    handleSubmit=async event=>{
        event.preventDefault();
        const{addRobotsStart}=this.props;
        const { displayName, email, username } = this.state;
        try{
            addRobotsStart({email,
                name:displayName,
                username})
            
                this.setState({
                    displayName:'',
                    email: '',
                    username:'',
                })
        }catch(error){
            
        }

    }

    handleChange=event=>{
        const {name, value}=event.target;

        this.setState({[name]:value});
    }
    render(){
        const {displayName,email,username}=this.state;
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
                    name ='username'
                    value={username}
                    onChange={this.handleChange}
                    label='Username'
                    required
                />
           
                <FormInput
                    type='text'
                    name ='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                />
                <CustomButton type='submit'> SAVE </CustomButton>
            </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addRobotsStart: robots => dispatch(addRobotsStart(robots))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(Addrecord);