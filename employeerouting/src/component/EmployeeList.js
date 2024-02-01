import EmployeeCard from "./EmployeeCard";
const EmployeeList=(props)=>{
    //console.log(props); 

     /*const renderEmployee=()=>{
    return( props.employees.map((emp,index)=>{return <tr key={index}>
        <td>{emp.empid}</td>
        <td>{emp.ename}</td>
        <td>{emp.sal}</td>    
    </tr>}))}*/

    const renderEmployee=()=>props.employees.map((emp,index)=>{
        return <EmployeeCard deleteHandler={deleteById} employee={emp} key={emp.empid}></EmployeeCard>
    })

    const deleteById=(empid)=>{
        console.log("in EmployeeList.js remove "+empid); 
        props.removeHandler(empid);
    }

    return(
        <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-12">    
            <h3>From Employee ListComponent</h3>
            {/* this button will generate link add which will display add form on the screen */}
            <Link to="/add">
            <div>
                <button type="button" name="btn" className="btn btn-primary">Add Employee</button>
            </div>
            </Link>
            {renderEmployee()}
        </div>
        </div>
        </div>
    );
}
 export default EmployeeList; 
