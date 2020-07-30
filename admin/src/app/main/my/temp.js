import React, {Component} from 'react';
import {connect} from 'react-redux';

import {FusePageSimple, DemoContent} from '@fuse';
import {withStyles, MuiThemeProvider} from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';


const styles = theme => ({
    root: {
        backgroundColor: 'white'
    },
    headerButton: {
        fontSize: '30px'
    }
})
class Invite extends Component {

    componentDidMount(){
        console.log(this.props.match.who)
    }
    render(){
        const {classes} = this.props;

        return(
            <FusePageSimple 
                classes={{
                    content: classes.root,
                    toolbar: "px-16 sm:px-24"
                }}
                header={
                    <div>HI</div>

                }
                content={
                    <div>Hello</div>
                }
                />
        )
    }
}
function mapStateToProps(store)
{
    console.log(store)
    return {
        user:store.auth.user
    }
}
export default (withStyles(styles, {withThemem: true})(connect(mapStateToProps)(Invite)));


<Table size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Period</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Number</TableCell>
                            <TableCell align="right">Color</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        { this.props.list && this.props.list.map((item)=>{
                            return(
                            <TableRow key={item._id}>
                                <TableCell component="th" scope="row">
                                    {item.betDisplayTime}
                                </TableCell>
                                <TableCell align="right">{item.betPrice}</TableCell>
                                <TableCell align="right">{item.betNumber}</TableCell>
                                <TableCell align="right">
                                    <ColorItem value={item.betColor}/>
                                    
                                </TableCell>
                            </TableRow>
                            )
                         })}
                        </TableBody>
                    </Table>



<CardContent>
                    
<div><GameResultTable limit={10} list={this.state.info} /></div>

</CardContent>
<CardActions>
    <Button size="small" onClick={this.prevPg}>Prev</Button>
    <p>{this.state.page + 1}</p>
    <Button size="small" onClick={this.nxtPg}>Next</Button>
</CardActions>