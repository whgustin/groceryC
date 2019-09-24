import React, {useState} from 'react';
import './Auth.css';

const Auth = (props) => {
    let [login, setLogin ] = useState(false);
    let [ firstName, setFirstName ] = useState('');
    let [ lastName, setLastName] = useState('');
    let [ email, setEmail] = useState('');
    let [ password, setPassword] = useState('');
    let [username, setUserName] = useState('');
    
    

    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login)

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setUserName('')
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        let url = login ? 'https://littlegrocery-server.herokuapp.com/user/signin' : 'https://littlegrocery-server.herokuapp.com/user/createuser'
        let user = login ? {password:password, username: username} : {firstName:firstName, lastName:lastName, email:email, password:password, username: username}
        fetch(url,{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body:JSON.stringify({
                user
            })
        }).then(
          (response) => response.json()
        ).then((data) => {
          console.log(data)
          props.updateToken(data.sessionToken);
      })
    }
    return(
        <form className="card-like">
            <h1>{ login ? 'Log In' : 'Sign Up' }</h1>
            <label className="display-block" htmlFor="username">Username:</label>
            <input className="display-block" type="text" name="username" value={username} onChange={(e) => setUserName(e.target.value)} />
            <label className="display-block" htmlFor="password">Password:</label>
            <input className="display-block" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {
          login ? null : 
                <React.Fragment>
                    <label className="display-block" htmlFor="email">Email:</label>
                    <input className="display-block" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="display-block" htmlFor="firstname">First Name:</label>
                    <input className="display-block" type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label className="display-block" htmlFor="lastname">Last Name:</label>
                    <input className="display-block" type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </React.Fragment>
        }   
            <button onClick={(e) => changeLogin(e)}>{ login ? 'Sign Up' : 'Log In' }</button>
            <button type="submit" onClick = {(e) => handleSubmit(e)}>Submit</button>
        </form>
    )
}

export default Auth;
