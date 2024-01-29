const MobileList = (props) =>{
    console.log(props);
    //  var namearr=["Iphone 15","samsung notes", "google pixel", "samsung guru","nikon 120"];
    return(
        <div>
            <ul>
                {props.arr.map((x,index)=><li key={index}>{x}------{index}</li>)}
            {/* {namearr.map(x=><li>{x}</li>)}*/}
                {/*<li>{namearr[0]}</li>
                <li>{namearr[1]}</li>
                <li>{namearr[2]}</li>*/}
            </ul>
        </div>
    )
}
export default MobileList;