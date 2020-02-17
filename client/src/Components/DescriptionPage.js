import React, {useState, useEffect} from 'react';
import Nav from "./Nav";
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom'

function DescriptionPage () {
    const location = useLocation();
    const [item, setItem] = useState({});
    
    useEffect(() => {
        setItem(location.state.item)
    })
   
    return(
        <>
        <Nav />
        <div className="container">
   <br />
        <h1>{item.name}</h1>
    <p>{item.description}</p>
    <p>{item.contact}</p>
    <Link to={{
        pathname:"/email",
        state: {
            item: item
        }
    }}>
       <button type="submit" className="btn btn-primary">Email</button>
       </Link>
       </div>


</>
    );
}

export default DescriptionPage;