import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Nav from './Nav';

import './App.css'


 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
    const ongoogle = (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            // Signed in
            const user = result.user;
            navigate("/")
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    }
 
    return(
        <>
            <main >        
                <section>
                    <div>                                            
                    <div>
                        <header className="banner"> 
                        <img className="logo-container" src="Todologo.png" alt="logo"/>
                    
                        <Nav></Nav>
                        </header>
                    </div>  
                    <div className='entPage'>
                        <div className='content'>                     
                                                        
                            <form>                                              
                                
                                    <label htmlFor="email-address">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"                                    
                                        required                                                                                
                                        placeholder="Email address"
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                

                                
                                    <label htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"                                    
                                        required                                                                                
                                        placeholder="Password"
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                
                                                    
                                
                                    <button                                    
                                        onClick={onLogin}                                        
                                    >      
                                        Login                                                                  
                                    </button>

                                    <button
                                        onClick={ongoogle}
                                        
                                        
                                    >
                                        Google
                                    </button>
                                                            
                            </form>
                        
                            <p className="text-sm text-white text-center">
                                No account yet? {' '}
                                <NavLink to="/Signup">
                                    Sign up
                                </NavLink>
                            </p>
                                                    
                        </div>
                        <footer>all credits to Alhedr, Damanhori, Emneina</footer>   
                    </div>
                </div>
                </section>
            </main>
        </>
    )
}
 
export default Login