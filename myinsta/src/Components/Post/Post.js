import React, { Component } from 'react'
import './Post.css';
import comment from "../../images/comment.svg";
import love from "../../images/love.svg";
import share from "../../images/share.svg";
import Avatar from '@material-ui/core/Avatar';
import postimage from "../../images/post.jpg";
import { thisExpression } from '@babel/types';
class Post extends Component {
    constructor(props){
        super(props);
        this.state ={
            commentList:[]

        }
     
    }
    componentDidMount(){
        this.getComments();
    }
    getComments=()=>{
        let data=[
            {
                "username": "ABC",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 1"
            }
                    ];
                    this.setState({commentList:data});
    }
    render(){
        return (
            <div className="post_container">
                   {/*Header*/}
                <div className="post_header">
                    <Avatar className="post_image" src={this.props.profileImage}/>
                    <div className="post_username">{this.props.userName}</div>
                </div>
                {/*image*/} 
                <div>
                    <img src={this.props.postImage} width="615px"/>
                    </div>  
                {/*Analytics*/}
                <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img src={love} className="post_reactimage"/>
                        <img src={comment} className="post_reactimage"/>
                        <img src={share} className="post_reactimage"/>
                        </div>
                    <div style={{"fontWeight":"bold", "marginLeft":"20px"}}>{this.props.Likes} likes
                    </div>
                </div>
                {/*comment section*/}
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                 <div className="post_comment">{item.username}:{item.description}</div>       
                       ))
                    }
                    <input text="text" className="post_commentbox" placeholder="Add a comment..."/>
                </div>
            </div>
        );
    }
}
export default Post;