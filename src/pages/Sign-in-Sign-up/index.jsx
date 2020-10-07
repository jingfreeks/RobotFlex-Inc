import React from 'react';
import './styles.scss';
import Signin from '../../component/signin';
import SignUp from '../../component/sign-Up';
const SignInSignUpPage=()=>{
    return(
        <div className="sign-in-sign-up">
            <Signin />
            <SignUp />
        </div>
    )
}

export default SignInSignUpPage;