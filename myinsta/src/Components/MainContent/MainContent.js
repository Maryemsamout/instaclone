import React ,{Component} from 'react';
import './MainContent.css';
import Suggestions from '../Suggestions/Suggestions';
import InfoService from '../InfoService/InfoService'
import MainPage from '../MainPage/MainPage'
import StatusBar from '../StatusBar/StatusBar';
import Grid from '@material-ui/core/Grid';
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render (){
        return (
            <div>
             <Grid container>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={6}>
                    <StatusBar/>
                    <MainPage/>
                </Grid>
                <Grid item xs={2}>
                <InfoService/>
                    <Suggestions/>
                    
                
                </Grid>
                <Grid item xs={2}>
                    
                </Grid>
             </Grid>  
            </div>
        );
    }

}
export default MainContent;