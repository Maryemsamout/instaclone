import React ,{Component} from 'react';
import './NavBar.css';
import insta_log from '../logoinsta.png';
import Avatar from '@material-ui/core/Avatar';
import pp from "../../images/pp1.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/love.svg";

import Grid from '@material-ui/core/Grid';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render (){
        return (
            <div>
                <div className="navbar_batcontent">
                    <Grid container >
                        <Grid item xs={2}></Grid>
                        <Grid item xs={1}>
                        <img  className="navbar_logo"src = {insta_log}  width= "105px"/> 
                        </Grid>
                        <Grid item xs={3} >
                            <input  className="navbar_search"text="text" placeholder="Search"/>
                            
                        </Grid>
                        <Grid item xs={3} style={{display:"flex"}} >
                            <img className="navbar_img" src={home} width="25px"/>
                            <img  className="navbar_img" src={message} width="25px"/>
                            <img className="navbar_img" src={find} width="25px"/>
                            <img className="navbar_img" src={react} width="25px"/>
                            <Avatar className="navbar_img" src={pp}  style={{maxWidth:"25px", "maxHeight":"25px"}} />
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                </div>
            </div>
        );
    }

}
export default NavBar;