import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Body(){

    const [countries, setCountries] = useState([])
    const [areas, setAreas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/countries')
            .then(res => {
              
                setCountries(res.data);
            })
            .catch(err => console.log(err))

            axios.get('http://localhost:5000/api/areas')
            .then(res => {
               
                setAreas(res.data);
            })
            .catch(err => console.log(err))
        
            
    }, [])




    return(
        <div className="container">
            <div className="row pl-3">
                {countries.map((item, key) => {
                    return(
                        <div className="col-md-6">
                        <div className="body-background mt-3 text-center">
                            <p className="text-color-body">{item.name}</p>
                        </div>
                        <div className="row">
                        <div className="col-md-5 text-color-body-2 p-3 ml-4 text-left">
                            <ul>
                                {areas.map(area => {
                                    return(
                                    <>{area.countryId == item._id ? <>
                                <li>{area.name}</li>
                                <hr />

                                    </>:<></>}</>
                                    )
                                })}
                             
                               
                            </ul>
                        </div>
                        <div className="col-md-5 text-color-body-2 p-3 ml-4">
                        <ul>
                                {areas.map(area => {
                                    return(
                                    <>{area.countryId == item._id ? <>
                                <li>{area.name}</li>
                                <hr />

                                    </>:<></>}</>
                                    )
                                })}
                             
                               
                            </ul>
                        </div>
                        </div>
        
                        </div>
        
                      
                    );
                })}
          

            </div>
            </div>
            

        
    );
}

export default Body;