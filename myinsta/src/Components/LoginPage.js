import React , {Component} from 'react';
import './LoginPage.css';
import SignIn from '../Signin/SignIn';
import SignUp from '../Signup/SignUp'; 
import fb from '../images/fb.png';

import Grid from '@material-ui/core/Grid';
import insta_logo from '../images/logoinsta.png';
import inst_image from '../images/9364675fb26a.svg';
class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLogin: true
         }
    }
    changeLogin=()=>{
        if (this.state.isLogin)
          this.setState({isLogin:false});
        else
          this.setState({isLogin:true});

    }
    render(){
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage_main">
                            
                            
                              <div>
                                  <div className="loginpage_rightcomponent">
                                      <img  className="logopage_logo" src={insta_logo}/>
                                      <div className="loginpage_signin">
                                          {this.state.isLogin ? <SignIn/> :<SignUp/>}
                                        
                                          <div className="login_ordiv">
                                              <div className="login_dividor"></div>
                                              <div className="login_or">OR</div>
                                              <div className="login_dividor"></div>

                                          </div>
                                          <div className="login_fb" ><img src={fb} width="15px" style={{"marginRight":"5px"}} />Log in with Facebook </div>
                                          <div className="login_forgt">Forgot password?</div>
                                      </div>
                                  </div>
                                  <div className="loginpage_signupoption">
                                  {this.state.isLogin ?  
                                          <div className="loginPage_signup">
                                          Don't have an account? <span  onClick={this.changeLogin} style ={{"fontweight":"bold" ,"color":"#0395f6"}} > Sign up </span>  
                                          </div>:
                                           <div className="loginPage_signin">
                                           Have an account? <span onClick={this.changeLogin} style ={{"fontweight":"bold" ,"color":"#0395f6"}} > Sign ip </span> 
                                        </div>}
                                  </div>
                                  
                              </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default LoginPage;