import React ,{Component} from 'react';
import '../Components/LoginPage.css';
import {storage,auth} from '../Components/firebase';
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailId: null,
            password:null
         }
    
     }
     login=()=>{
       //  localStorage.setItem("users","admin");
    //window.location.reload();
        auth.signInWithEmailAndPassword(this.state.emailId,this.state.password)
        .then((userCredential)=>{
            var user =userCredential.user;
            localStorage.setItem("users",user);
            window.location.reload();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
          });
}
    render(){
        return(
            <div>
                <input className="loginpage_text" onChange={(event)=>{this.state.emaiId=event.currentTarget.value}} type="text" placeholder="username or email"/>
                <input className="loginpage_text"  onChange={(event)=>{this.state.password=event.currentTarget.value}}type="password" placeholder="Password"/>
                <button className="login_button" onClick={this.login}>Log in</button>
            </div>
        );      
    }     

}
export default SignIn;