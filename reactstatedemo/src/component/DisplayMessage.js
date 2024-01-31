import React,{Component} from 'react';

class DisplayMessage extends Component{
    constructor(){
        super();
        this.state={msg:"This is initial state",
        name:"Ankit",
        address:"Nagpur"}
        //if we use old way of writing function the button object will be consider as this
        //inside function bt we want to use class object as this    
        //so add following line to bind function with class object or use arrow function 
//      this.changeMessage = this.changeMessage.bind(this);
    }

    /*changeMessage(){
        this.setState({msg:"This is after first click"})
    }*/
    changeMessage=()=>{
        this.setState({msg:"This is after first click"})
    }

    render(){
        return(
            <div>
                Nmae: <input type="text" name="nm" value={this.state.name}
                onChange={(event)=>this.setState({msg:event.target.value})}>
                </input>
                Address: <input type="text" name="address" value={this.state.address}
                onChange={(event)=>this.setState({address:event.target.value})}>    
                </input>
                {this.state.msg} <br/>
                {this.state.name} <br/>  
                {this.state.address } <br/>
                <button type='button' name='btn' value='click'
                onClick={this.changeMessage}>Change the message</button>
               {/*
                Use the following way when you want to pass data to the event handler function 
                <button type='button' name='btn' value='click'
                onClick={(event)=>this.changeMessage}>Change the message</button> */}
            </div> 
        )
    }
}

export default DisplayMessage;