import React from 'react';
import Nav from "./Nav";

function EmailPage() {

    return (
        <>
            <Nav/>
            <div className="container">
                <div className="col-md-8 padding-left">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>


                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Input the message here</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        
                    </form>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>


        </>
    );
}

export default EmailPage;
