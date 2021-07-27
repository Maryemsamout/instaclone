import React, { Component } from 'react'
import'./InfoService.css';
import {Avatar} from '@material-ui/core';
import imageSrc from "../../images/pp1.png";
class InfoService extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render()
    {
        return(
            <div>
                <div className="info_container">
                    <Avatar src={imageSrc} className="info_image"/>
                    <div>
                        <div>anundya_bunny</div>
                        <div>Description</div>
                    </div>
                </div>

            </div>
        )
    }
}
export default InfoService;