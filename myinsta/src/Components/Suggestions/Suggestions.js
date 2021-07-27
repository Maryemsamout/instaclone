import React, { Component } from 'react'
import './Suggestion.css';
import {Avatar} from '@material-ui/core';
import imageSrc from "../../images/pp1.png";
class Suggestions extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render()
    {
        return(
            <div>
                <div className="suggestios_container">
                    <div className="suggestios_header">
                        <div>Suggestion For you</div>
                    </div >
                    <div className="suggestios_body">
                        <div className="suggestios_friends">
                         <Avatar src={imageSrc} className="suggestios_image"/>
                         <div className="suggestios_username"> Friend 1</div>
                        </div>
                        <div className="suggestios_friends">
                         <Avatar src={imageSrc} className="suggestios_image"/>
                         <div className="suggestios_username"> Friend 1</div>
                        </div>
                        <div className="suggestios_friends">
                         <Avatar src={imageSrc} className="suggestios_image"/>
                         <div className="suggestios_username"> Friend 1</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Suggestions ;