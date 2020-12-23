import React, {useState, useEffect} from 'react';
import Firebase from './components/Firebase';
import "./Login.css";
import Log from './Log';
import App from './App';

const Login = () =>{
    const[user, setUser]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[emailError, setEmailError]=useState('');
    const[passwordError, setPasswordError]=useState('');
    const[hasAccount, setHasAccount]=useState(false);

    const clearInputs = () =>{
        setEmail('');
        setPassword('')
    }

    const clearErrors= ()=>{
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin=()=>{
        clearErrors();
        Firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err =>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };


    const handleSignUp = ()=> {
        clearErrors();
        Firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err =>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });        
    };

    const handleLogout=()=>{
        Firebase.auth().signOut();
    };

    const authListener = ()=>{
        Firebase.auth().onAuthStateChanged(user=>{
            if(user){
                clearInputs();
                setUser(user);
            }else{
                setUser('');
            }
        });
    };

    useEffect(()=>{
        authListener();
    }, [])


    return(
        <div className="Login">
            {user ? (
                <App handleLogout={handleLogout}/>
            ): (
                <Log 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            />
            )}            
            
        </div>
    );
};

export default Login;