import React from 'react';
import {render} from 'react-dom';

function App(){
    return(
        <div className = 'column'>
            <div className = 'logo'></div>
            <form className = 'form column'>
                <h2 className = 'title text'>Log in</h2>
                <input className = 'input email' type = 'email' placeholder = 'email' required/> 
                <input className = 'input password' type = 'password' placeholder = 'password' required/>
                <div className = 'error'>E-mail or password is incorrect</div>
                <button className = 'button' type = 'submit'>Login</button>
            </form>
        </div>
    )
}

render(<App />,document.getElementById('root'));