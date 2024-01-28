/*const Footer=(props)=>{
    return(
        <div>
            <h5>&copy; All rights are reserved</h5>
        </div>
    );
}*/

import React,{Component} from 'react';

class Footer extends Component{
    constructor(props){
        super();
        this.state={
            id:props.id,
            name:props.name
        }
    }
    render(){
        return(
            <div>
                <h5>&copy; All rights are reserved</h5>
                {this.state.id}------{this.state.name}
                {this.props.id}------{this.props.name}
            </div>
        );
    }
}

export default Footer;