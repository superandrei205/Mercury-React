import React from 'react';
import {render} from 'react-dom';

import Column from './components/Column.js'

function App(){
    return(
       <Column />
    )
}

render(<App />,document.getElementById('root'));