import React, {Component} from 'react';

// import Logo from './Logo.js';
// import Form from './Form.js';

// const METHOD = 'POST';
// const API_URL = 'https://us-central1-mercdev-academy.cloudfunctions.net/login';
// const HEADERS = new Headers({ 'Content-Type': 'application/json' });

class Column extends Component{
    render(){
        return(
            <div className = 'column'>
                <Logo />
                <Form />
            </div>
        )
    }
}

function Logo(){
    return(
        <div className = 'logo'></div>
    )
}

class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: false,
            foto: '',
            name: ''
        };
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getName = this.getName.bind(this)
    }

    handleEmailChange(event) {
        console.log(event.target.value);
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        console.log(event.target.value);
        this.setState({password: event.target.value});
    }
    
    handleSubmit(event) {
        return fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login',
        {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
          }).then(response => {
             response.json()
        }).then((data=>{
            console.log(JSON.stringify(data))
        }))
        
        event.preventDefault();
        event.stopPropagation();
    }


    render(){
        return(
            <form className = 'form column' onSubmit = {this.handleSubmit}>
                <Title />
                <Input type = 'email' placeholder = 'email' value={this.state.email} onChange={this.handleEmailChange}/>
                <Input type = 'password' placeholder = 'password' value={this.state.password} onChange={this.handlePasswordChange}/>
                <Error />
                <Button />
            </form>
        )
    }
}

function Title(){
    return(
        <h2 className = 'title text'>Log in</h2>
    )
}

function Input(props){
    return(
        <input className = 'input email' type = {props.type} placeholder = {props.placeholder} required onChange ={props.onChange} value = {props.value}/>  
    )
}

function Error(){
    return(
        <div className = 'error'>E-mail or password is incorrect</div>
    )
}

function Button(props){
    return(
        <button className = 'button' type = 'submit'>Login</button>
    )
}

export default Column;