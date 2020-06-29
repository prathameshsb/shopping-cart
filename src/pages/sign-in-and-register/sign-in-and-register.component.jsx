import React from 'react';
import SignIn from '../../component/signin/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component';

import './sign-in-and-register.style.scss';

const SignInAndRegister = () => (
    <div className="sign-in-and-register">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndRegister;