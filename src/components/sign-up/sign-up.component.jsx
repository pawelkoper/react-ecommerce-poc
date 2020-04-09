import React from "react";
import "./sign-up.styles.scss"
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert("passords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error);
        }


    };

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' label='Display Name' name='displayName' value={displayName}
                               onChange={this.handleChange}/>
                    <FormInput type='email' label='Email' name='email' value={email} onChange={this.handleChange}/>
                    <FormInput type='password' label='Password' name='password' value={password}
                               onChange={this.handleChange}/>
                    <FormInput type='password' label='Confirm Password' name='confirmPassword' value={confirmPassword}
                               onChange={this.handleChange}/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
