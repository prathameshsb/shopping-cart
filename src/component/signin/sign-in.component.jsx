import React from 'react';
import FormInput from '../forminput/form-input.component'
import {signInWithGoogle} from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';

export default class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value}); 
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onClick={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        handleChange={this.handleChange}
                        value ={this.state.email} 
                        label="Email"
                        required/>
                    <FormInput 
                        type="password" 
                        name="password" 
                        value ={this.state.password}
                        handleChange={this.handleChange} 
                        label="Password"
                        required/>

                    <CustomButton type="submit" >Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </form>
            </div>
        )
    }
}