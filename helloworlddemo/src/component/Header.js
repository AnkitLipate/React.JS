import './Header.css'; 
/*function Header(props){
    return(
        <h1>This is Header</h1>
    )
}*/

const Header = (props) =>{
    console.log(props);
    return(
        <h1>This is Header {props.name}</h1>
    )
}

export default Header;