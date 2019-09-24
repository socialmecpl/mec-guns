import React from 'react';

import Signin from '../../components/sign-in/sigin-in.component';
import SignUp from '../../components/signup/signup.component';

import './signin-and-signup.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <Signin />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;