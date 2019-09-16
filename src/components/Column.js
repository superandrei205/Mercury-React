import React from 'react';

import Logo from './Logo.js';
import Form from './Form.js';

function Column(){
    return(
        <div className = 'column'>
            <Logo />
            <Form />
        </div>
    )
}

export default Column;