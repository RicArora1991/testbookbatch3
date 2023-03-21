import React from 'react'
import PropTypes from 'prop-types'
const Header = (props) => {

  return (
    <div>
      {/* header file<br></br>
      {props.name}<br></br>
      {props.text}<br></br>
      {props.show} */}
      {/* {props.studentobjectdata.name}<br></br>
      {props.studentobjectdata.uid}<br></br>
     the pass value is {props.studentobjectdata.pass} */}
      {/* the oebject value is {props.studentdata} */}

      {/* the oebject value is {props.studentdata[1].uid}
      {console.log('the console value of object is',props.studentdata)}
      {console.log('the console value of object is',props.studentdata.uid)} */}
      {/* My age is {props.age}<br></br>
      My age is {props.this.age}<br></br> */}
      {/* the oebject value is {props.studentdata.uid} */}
      {/* {document.write('hello testbook ')} */}
      {/* the pass value is {props.studentobjectdata.name}
{console.log(props.studentobjectdata)} */}

{/* 
      <h2>Header Component</h2>
      The title of this app is {props.title}<br></br>
      The age os this app is {props.age} */}

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
     { props.searchbar?<form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>:'no searchbar'}
    </div>
  </div>
</nav>
    </div>
  )
}
Header.defaultProps={
  title:'default title is here',
  age:88
}

Header.propTypes={
  title:PropTypes.number,
  searchbar:PropTypes.bool.isRequired
}
export default Header
