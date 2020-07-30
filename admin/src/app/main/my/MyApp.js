import React, {Component} from 'react';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';


import {Avatar, Button,Card,Modal, Tab, Tabs,Dialog,DialogActions, DialogContent,DialogTitle,Icon,InputAdornment,TextField,IconButton} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import {withStyles, MuiThemeProvider} from '@material-ui/core/styles';

import {FusePageSimple, DemoContent} from '@fuse';
import { connect } from 'react-redux';
const styles = theme => ({
    root: {
        backgroundColor: 'white'
    },
    headerButton: {
        fontSize: '30px'
    }
})
class My extends Component {

    render(){
    const {classes} = this.props;

        return(
            <FusePageSimple 
            classes={{
                content: classes.root,
                toolbar: "px-16 sm:px-24"
            }}
            header={
                <div  className="flex flex-col flex-1" style={{
                    backgroundColor: '#665c32',
                    color: '#ffffff',
                    border: '10px #332323'}}>
                        <div className="items-center py-24 px-24">
                            <h2>Avaliable Balance</h2>
                            <br/>
                            <h4> {this.props.user.balance} US$</h4>
                        </div>
                   
                    </div>
            }
            content={
                <div>
                <Button
                            to={`/my/task`}
                            component={Link}
                            color="primary"
                            variant="outlined"
                            style={{
                                margin:'30px',
                                marginBottom:'0px',
                                minHeight:'50px'
                            }}
                        >
                        Task Center
                </Button>
                <Button
                            to={`/my/promotion`}
                            component={Link}
                            color="primary"
                            variant="outlined"
                            style={{
                                margin:'30px',
                                marginBottom:'0px',
                                minHeight:'50px'
                            }}
                        >
                        My Promotion
                </Button>
                <Button
                            to={`/my/wallet`}
                            component={Link}
                            color="primary"
                            variant="outlined"
                            style={{
                                margin:'30px',
                                marginBottom:'0px',
                                minHeight:'50px'
                            }}
                        >
                        My Wallet
                </Button>
                <Button
                            to={`/my/promotion`}
                            component={Link}
                            color="primary"
                            variant="outlined"
                            style={{
                                margin:'30px',
                                marginBottom:'0px',
                                minHeight:'50px'
                            }}
                        >
                        My Bank
                </Button>
                
                <Button
                            to={`/my/financial`}
                            component={Link}
                            color="primary"
                            variant="outlined"
                            style={{
                                margin:'30px',
                                marginBottom:'0px',
                                minHeight:'50px'
                            }}
                        >
                        Financial Details
                </Button>
                <Button
                            to={`/my/promotion`}
                            component={Link}
                            color="primary"
                            variant="outlined"
                            style={{
                                margin:'30px',
                                marginBottom:'0px',
                                minHeight:'50px'
                            }}
                        >
                        About Us
                </Button>
                </div>
            }
               
            />
        )
    }
}
function mapStateToProps(store)
{
    console.log(store)
    return {
        user        :   store.auth.user,
    }
}
export default (withStyles(styles, {withThemem: true})(withReducer('myApp',reducer)(connect(mapStateToProps)(My))))