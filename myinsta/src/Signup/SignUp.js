import React ,{Component} from 'react';
import '../Components/LoginPage.css';
import '../Signup/SignUp.css';
 import {storage,auth} from '../Components/firebase';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailId : null,
            name:null,
            userName:null,
            pasword:null
         }
    
     }
    newSignUp =() =>{
        auth.createUserWithEmailAndPassword(this.state.emailId,this.state.password)
        .then((userCredential)=>{
            var user =userCredential.user;
            let payload ={
                "userId":user.uid,
                "userName":this.state.userName,
                "name":this.state.name,
                 "profileImage":""
            }
            
        const requestOptions ={
            method: 'POST', 
           
            headers:{ 'Content-Type': 'application/json'},
           
            body: JSON.stringify(payload) ,
        }
        
        fetch("http://localhost:8080/users" , requestOptions)

        .then(response =>response.json())
        .then(data=>{
            localStorage.setItem("users",user);
            window.location.reload();
        })
        .catch(error=>{

        })})
        .catch((error) => {
            var errorCode = error.code;
            
            var errorMessage = error.message;
            // ..
          });
        
    }
    render(){
        return(
            <div>
                <input className="loginpage_text" onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} type="text" placeholder ="Mobile number or Email"/>
                <input className="loginpage_text" onChange={(event)=>{this.state.name=event.currentTarget.value;}} type="text" placeholder ="Full Name"/>
                <input className="loginpage_text" onChange={(event)=>{this.state.userName=event.currentTarget.value;}} type="text" placeholder ="UserName"/>
                <input className="loginpage_text" onChange={(event)=>{this.state.password=event.currentTarget.value;}} type="password" placeholder ="Password"/>
                <button className="login_button" onClick={this.newSignUp} > SignUp</button>
            </div>
        );      
    }     

}
export default SignUp;