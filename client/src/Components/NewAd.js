import React, {Fragment, useState} from 'react'
import Nav from './Nav'
import axios from 'axios'
import FileUpload from './FileUpload';

class newAd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            contact: '',
            desc: '',
            area: '',
            category: '',
            countries: [],
            subs: [],
            categories: [],
            done: false,
            err: false,
            filePath: 'null'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleDropdownaSubs = this.handleDropdownaSubs.bind(this);
        this.handleDropdownaAreas = this.handleDropdownaAreas.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentWillMount(){
        axios.get('http://localhost:5000/api/areas')
            .then(res => {
                this.setState({countries: res.data})
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:5000/api/subs')
            .then(res => {
                this.setState({subs: res.data})
            })
            .catch(err => console.log(err))
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.id]: e.target.value })

    }   

    handleDropdownaAreas = e => {
        console.log(e.target.value)  
        for(let count=0; count<this.state.countries.length; count++){
            if(this.state.countries[count].name == e.target.value){
                console.log(this.state.countries[count]._id)

                this.setState({area: this.state.countries[count]._id})
                break;
            }
        }
        
    }



    handleDropdownaSubs = e => {
        console.log(e.target.value) 

        for(let count=0; this.state.subs.length; count++){
            if(this.state.subs[count].name == e.target.value){
                console.log(this.state.subs[count]._id)
                this.setState({category: this.state.subs[count]._id})
                break;
            }
        }
        
    }


    handleFile = item => {
        this.setState({filePath: item})
    }


    handleSubmit = e => {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            contact: this.state.contact,
            desc: this.state.desc,
            filePath: this.state.filePath
        }
        console.log(obj)
        axios.post(`http://localhost:5000/api/ads/${this.state.category}/${this.state.area}` ,obj)
            .then(res => {
                console.log(res)
                this.setState({done: true})
            })
            .catch(err => {
                this.setState({err: true})
            })
    }
    
    render(){
    return(
        <>
        <Nav />
        <div className="container">
        {this.state.err ? <>
        
        <div className="alert alert-danger">Error</div>
        
    </>:<></>}

    {this.state.done ? <>
    
    <div className="alert alert-success">Done</div>
    
</>:<></>}
        {/* <FileUpload sendData={this.handleFile}/> */}

        <form onSubmit={this.handleSubmit}>
        

        <div class="form-group">
                <label for="exampleFormControlInput1">Ad Heading</label>
                <input onChange={this.handleChange} required type="text" class="form-control" id="name" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Description</label>
                <input onChange={this.handleChange} required type="text" class="form-control" id="desc" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Contact Email</label>
                <input onChange={this.handleChange} type="email" class="form-control" id="contact" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Area</label>
                <select onChange={this.handleDropdownaAreas} required class="form-control" id="area">
                <option>...</option>

                    {this.state.countries.map(item => {
                        return(
                        <option >{item.name}</option>
                        );
                    })}
                </select>
            </div>

            <div class="form-group"> 
                <label for="exampleFormControlSelect1">Sub Category</label>
                <select onChange={this.handleDropdownaSubs} required class="form-control" id="category">
                <option>...</option>

                    {this.state.subs.map(item => {
                         return(
                            <option >{item.name}</option>
                            );

                    })}
                </select>
            </div>

         
    
          
            <button onClick={this.handleSubmit} className="btn btn-primary col-lg-12">Add</button>


        </form>
        

        </div>
        </>
    );
    }
}

export default newAd;