import React from 'react';

function Searchbar(){
    return(
        <div className="container">
                    <br/>
                        <div className="col-md-12">
                            <form>
                                <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
                            </form>
                        </div>
</div>
    );
}

export default Searchbar;