import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Body() {

    const [countries, setCountries] = useState([])
    const [areas, setAreas] = useState([])
 

    useEffect(() => {
        async function fetchFunction() {
            await axios.get('http://localhost:5000/api/countries').then(res => {
    
                setCountries(res.data);
            }).catch(err => console.log(err))
    
            await axios.get('http://localhost:5000/api/areas').then(res => {
    
                setAreas(res.data);
            }).catch(err => console.log(err))
        }
        fetchFunction()
    }, [])


    // useEffect(() => {
    //     async function fetchData() {
    //       // You can await here
    //       const response = await MyAPI.getData(someId);
    //       // ...
    //     }
    //     fetchData();
    //   }, [someId]);


    return (
        <div className="container">
            <div className="row pl-3">
                {
                countries.map((item, key) => {
                    return (
                        <div className="col-md-4">
                            <div className="body-background mt-3 text-center border-radius">
                                <p className="text-color-body">
                                    {
                                    item.name
                                }</p>
                            </div>
                            <div className="row">


                                <div className="col-lg-10  ml-4 ">


                                    <div class="list-group">
                                        {
                                        areas.map(area => {
                                            return (

                                                <>{
                                                    area.countryId == item._id ? <>
                                                    <Link to={{
                                                        pathname: "/categories",
                                                        state: {
                                                            item: area._id
                                                        }
                                                    }}>
                                                        <input type="checkbox" name="CheckBoxInputName" value="Value4" id="CheckBox4"/>
                                                        <label class="list-group-item" for="CheckBox4">
                                                            {
                                                            area.name
                                                        }</label>
                                                        </Link>


                                                    </> : <></>
                                                }</>
                                            )
                                        })
                                    } </div>

                                </div>
                            </div>

                        </div>


                    );
                })
            } </div>
        </div>


    );
}

export default Body;
