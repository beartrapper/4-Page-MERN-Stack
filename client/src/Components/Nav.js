import React from 'react';

function Nav() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand temp-navs" href="#">Bed Page Clone</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse mr-auto" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Sugar Babies <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Live GFE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Meet and Fuck</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">My Account</a>
      </li>
    </ul>
  </div>
</nav>
<p className="nav-below-writing">Choose a location</p>

  <hr className="hr-nav" />
</>
    );
}

export default Nav;