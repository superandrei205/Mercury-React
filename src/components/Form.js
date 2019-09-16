import React from 'react';

import Title from './Title.js';
import Input from './Input.js';
import Error from './Error.js';
import Button from './Button.js';

function Form(){
    return(
        <form className = 'form column'>
            <Title />
            <Input type = 'email' placeholder = 'email'/>
            <Input type = 'password' placeholder = 'password'/>
            <Error />
            <Button />
        </form>
    )
}

export default Form;