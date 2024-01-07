export default function Icard(props) {
    
    // Object Destructying
    let {name, city, address} = props.obj;
    
    // Normal property fetch
    let name1 = props.obj.name;

    return(
        <pre> 

            <p>Name : {name}  </p>
            
            <p>City : {city} </p>
            
            <p>Address : {address} </p>
            
            <p> name 1 : {name1} </p>

        </pre>
    )
}