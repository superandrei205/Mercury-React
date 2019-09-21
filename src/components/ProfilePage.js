import React, {Component} from 'react';

import Photo from './Photo.js';
import Name from './Name.js';
import Button from './Button.js';

class ProfilePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <form className = 'form column' onSubmit = {this.props.removeProfile} style = {{display:`${this.props.display}`}}>
                <Photo photod = {this.props.photo}/>
                <Name named = {this.props.name}/>
                <Button text = 'Logout'/>
            </form>
        )
    }
}

export default ProfilePage;