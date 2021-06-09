import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import '../styling/login.scss';
import '../styling/globals.scss';
import Logo from '../images/logo.png';

import { useDispatch } from 'react-redux';
import { setSignUpSuccess } from '../redux/signup';

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [signUp, setSignUp] = useState(false);
    const dispatch = useDispatch();

    const apiRequest = (e) => {
        const url = "http://localhost:5000/signup";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                username: username,
                email: email,
                password: password,
                secondAttemptPassword: password2
            })
        }
        fetch(url, options)
        .then(res => res.json())
        .then(data => {
            if(data === "Success"){
                setSignUp(true);
            }
        });
    }


    if(signUp){
        dispatch(setSignUpSuccess(true));
        return (<Redirect to="/" />)
    }
    return (
        <div className="login-container">
            <section className="flex-c login">
                <div className="login-header">
                    <img src={Logo} alt={Logo} />
                </div>
                <div className="login-form">
                    {/* {(displayError) ? (<Alert variant="danger">{errorMsg}</Alert>) : null} */}
                    <Form>
                        <Form.Group controlId="usernameSignUp">
                            <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="emailSignUp">
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="passwordSignUp">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="password2Signup">
                            <Form.Control type="password" placeholder="Enter Password Again" onChange={(e) => setPassword2(e.target.value)}/>
                        </Form.Group>
                    </Form> 
                </div>
                <div className="login-btn">
                    <Button variant="success" onClick={() => apiRequest()}>Sign Up</Button>
                </div>
                <div className="login-signup">
                    <span>
                        <p>Already Have An Account? <Link to="/"><em>Login</em></Link> </p>
                    </span>
                </div>
            </section>
        </div>
    );
}