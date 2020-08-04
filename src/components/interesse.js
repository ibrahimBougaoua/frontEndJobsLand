import React, { Component } from "react";
import { Link } from "react-router-dom";

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
<div className="col-md-12">
<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
<div className="row no-gutters">
    <div className="col-md-2">
        <img src={element[2]} class="card-img rounded-0" alt="..." />
    </div>
    <div className="col-md-10">
        <div className="card-body">
            <small className="card-title">{element[5]}</small><br />
            <small className="text-muted">{element[1]}</small><br />
            <Link className="btn btn-primary btn-sm position-relative" to={"/single/" + element[10]} style={{top: "15px"}}>Show more</Link>
        </div>
    </div>
</div>
</div>
</div>
);

return (
    <div>

    <div className="container">

    <p className="lead text-sm-left">interesse</p>

    <div className="row">
    {listOfJobs}
    </div>

    </div>

    </div>
);
}
}