import React,{Component} from "react";
import {Form,Button} from 'react-bootstrap';

class EmployeeAdd extends Component{
    constructor(props){
        super();
        this.state={
            empid:"",
            ename:"",
            sal:""
        }
    }

    add=(event)=>{
        event.preventDefault();//stop refreshing the page by submit event
        //this will do the validation
        if(this.state.empid==="" || this.state.ename==="" || this.state.sal===""){
            alert("all fields are mandatory");
            return;
        }
        //this will call addEmployee function in app.js
        this.props.addEmployeeHandler(this.state);
        //to clear data from text boxes form
        this.setState({empid:"",ename:"",sal:""});
    }

    render(){
        return(
            <Form>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>Employee Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Id" 
            value={this.state.empid}
            onChange={(event)=>this.setState({empid:event.target.value})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" 
                value={this.state.ename}
                onChange={(event)=>this.setState({ename:event.target.value})} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" 
            value={this.state.sal}
            onChange={(event)=>this.setState({sal:event.target.value})}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={this.add}>
        Submit
      </Button>
    </Form>
        );
    }
}

export default EmployeeAdd;