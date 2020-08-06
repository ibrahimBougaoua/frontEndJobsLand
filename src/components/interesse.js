import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";

import axios from 'axios';

// handle button click of login form
async function listJobs() {
    try {
      const response = await axios.get('http://127.0.0.1:5002/job/showlater/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

export default class Interesse extends Component {

    state = {
        jobs: []
      }
    
      componentDidMount =()=>{
        listJobs().then(response => {
          this.setState({
            jobs: response.data
          });
        });
      }

render() {

const listOfJobs = this.state.jobs.map((element) => 
<div className="col-md-3">
<div className="card border-0 mr-2 shadow-sm mb-3 bg-white rounded">
  <div className="card-body">
    <h6 className="card-subtitle mb-3 text-dark w-100">{ element[5].length < 50 ? element[5] : element[5].substring(0, 50) + '...' }</h6>
    <p className="card-subtitle mb-3 text-muted w-100">company : { element[2].length < 15 ? element[2] : element[2].substring(0, 15) + '...' }</p>
    <p className="card-subtitle mb-3 text-muted">published : {element[1]}</p>
    <Link to={'/single/' + element[10]} className="btn btn-sm btn-outline-info">Read more</Link>
  </div>
</div>
</div>
);

return (

    <div className="container">

    <Nav nameOne="Intéressé"></Nav>


<div className="card mb-4 mt-4 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-2">
			<img src="/undraw_Popular_re_mlfe.svg" class="w-100 h-100 mt-2 rounded p-3" alt="..." />
		</div>
		<div className="col-md-10">
			<div className="card-body">
			<h5 className="card-title">History : </h5>
  		</div>
		</div>
	</div>
</div>

    <div className="row">
    {listOfJobs}
    </div>

    </div>

);
}
}