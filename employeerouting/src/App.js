import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './component/Header';
import EmployeeList from './component/EmployeeList';
import EmployeeAdd from './component/EmployeeAdd';
import EmployeeEdit from './component/EmployeeEdit';
import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
function App() {
  //emparr key we want to use for storing data
  const LOCAL_STORAGE_EMPARR='emparr';
  const session_STORAGE_uname="username";
  /*let emparr = [{empid:10, ename:"Ankit", sal:4444},
                {empid:11, ename:"Rajan", sal:5555},
                {empid:12, ename:"Kishori", sal:6666}
  ]*/

  //since we want to modify array we need to use it as state, in functional component
  //useSate hook is used for creating state object property
  //use state will return a variable and function
  const [emparr,setEmparr] = useState([]);
  const [count,setCnt]=useState(0);

//useEffect accept a function and a object, and it calls the function when the 
//state of 2nd parameter changes
//since our 2nd parameter is empty array which is constant and hence the code 
//will get executed only once 
useEffect(()=>{
  console.log("called the function")
  const arr=JSON.parse(localStorage.getItem(LOCAL_STORAGE_EMPARR))
  if(arr){
    setEmparr(arr);
    console.log(emparr);
  }
  else{
    console.log("array not found")
  }
},[]);

//when emparr array changes then we want to overwrite value in localStorage
useEffect(()=>{
  console.log("setItem called")
  if(emparr.length!==0){
  localStorage.setItem(LOCAL_STORAGE_EMPARR,JSON.stringify(emparr))
  }
},[emparr,count])

const removeEmp=(eid)=>{
  console.log("in app.js remove "+eid);
  const newarr=emparr.filter((emp)=>{
    return emp.empid!==eid;
  });

  setEmparr(newarr);

}

const updateEmp=()=>{
  setEmparr(
    emparr.map((e)=>{
      return e.empid===emp.empid?{...emp}:e; 
    })
  )
}

//add one employee object into state emparr
const addEmployee=(ob)=>{
  //[...emparr] will create a copy into newemparr
  let newemparr=[...emparr,{...ob}];
  //to change the value of emparr
  setEmparr(newemparr)
  setCnt(count+1);
}

  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch> {/* To execute only one of the route */}
          {/* add switch to select only one route,
          add exact to match the path exactly and not portion of it */}
          <Route path="/" exact 
          render={(props)=>(<EmployeeList {...props} removeHandler={removeEmp} employees={emparr}/>)}></Route>
          <Route path="/add" exact 
          render={(props)=>(<EmployeeAdd {...props} addEmployeeHandler={addEmployee}/>)}></Route>
          <Route path="/edit/:empid" exact 
          render={(props)=>(<EmployeeEdit {...props} updateEmployeeHandler={updateEmp} />)}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
 