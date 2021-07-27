import React, { Component } from 'react'
import './MainPage.css';
import uploadImage from "../../images/upload.png";
import Post from '../Post/Post';
import {storage, auth} from "../firebase";
class MainPage extends Component {
    constructor(props){
        super(props);
        this.state ={
              postArray:[],
              progressBar:"",
        }
    } componentDidMount()
    {
        this.getPost();
    }
    getPost=()=>{
        const thisContext=this;
      //  let data= [
            // {
            //     "postId":"123456",
            //     "userName":"anindya",
            //     "postImage":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
            //     "Likes":"1234",

            // }
      //  ];
         
        fetch("http://localhost:8080/post" )
    
        .then(response =>response.json())
        .then(data=>{
            thisContext.setState({postArray:data});
            
        });
    }
    upload=(event)=>{
        let image=event.target.files[0];
        const thisContext=this;
        if (image== null || image == undefined){
            return;
        }
        var uploadTask =storage.ref("images").child(image.name).put(image);
        uploadTask.on(
            "state_changed",
            function(snapshot){
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                thisContext.setState({progrssBar:progress});
                           },
            function(error){

            },
            function(){
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                console.log(downloadURL);
                let payload ={
                    "postId":Math.floor(Math.random()*100000).toString(),
                    "userId":JSON.parse(localStorage.getItem("users")).uid,
                    "postPath":downloadURL,
                    "timeStamp":new Date().getTime(),
                    "likeCount":0
                }
                
            const requestOptions ={
                method: 'POST', 
               
                headers:{ 'Content-Type': 'application/json'},
               
                body: JSON.stringify(payload) ,
            }
            
            fetch("http://localhost:8080/post" , requestOptions)
    
            .then(response =>response.json())
            .then(data=>{
                console.log(data);
                
            })
            .catch(error=>{
    
            })})

                
            }
        );
    }
    render(){
        return (
            <div>
                <div  className="mainpage_container" >
                    <div className="mainpage_divider"></div>
                    <div className="fileupload">
                        <label for="file-upload"> 
                         
                             <img  className="mainpage_uploadicon"src={uploadImage}/>
                         </label>
                        <input onChange={this.upload} id="file-upload" type="file"/>
                        </div> 
                    <div className="mainpage_divider"></div>

                </div>
                <div className="upload_text">{this.state.progressBar}</div>
                {
                    this.state.postArray.map((item,index)=>(
                        <Post id={item.postId} userName={item.userName} postImage={item.postImage} Likes={item.Likes}/>
                    ))
                } 
               
            </div>
        );
    }
}
export default MainPage;