// import React, {Component} from 'react';

// import Title from './Title.js';
// import Input from './Input.js';
// import Error from './Error.js';
// import Button from './Button.js';

// class Form extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
    
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
    
//     handleSubmit(event) {
//         console.log('Отправленное имя: ' + this.state.value);
//         event.preventDefault();
//     }
    
//     render(){
//         return(
//             <form className = 'form column' onClick = {this.handleSubmit}>
//                 <Title />
//                 <Input type = 'email' placeholder = 'email' value={this.state.value} onChange={this.handleChange}/>
//                 <Input type = 'password' placeholder = 'password' value={this.state.value} onChange={this.handleChange}/>
//                 <Error />
//                 <Button className = 'button' type = 'submit'/>
//             </form>
//         )
//     }
// }

// export default Form;