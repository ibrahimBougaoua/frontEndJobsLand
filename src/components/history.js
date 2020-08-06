import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Nav from "./nav";

// handle button click of login form
async function viewsJobs() {
    try {
      const response = await axios.get('http://127.0.0.1:5002/job/history/views/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export default class History extends Component {

state = { jobsViews: []};

componentDidMount =()=>{
	viewsJobs().then(response => {
	  this.setState({
      jobsViews: response.data
	  });
	});
}

render() {

const historyViews = this.state.jobsViews.map((element) => 

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

<Nav nameOne="Historique" ></Nav>


<div className="row">
  
<div className="col-md-3">
<div className="card border-0 mr-2 shadow-sm mb-3 bg-white justify-content-center rounded">
  <div className="card-body">
    <h5 className="card-title text-center">Historique !!! </h5>
    <img src="/undraw_Popular_re_mlfe.svg" class="w-75 h-75 mt-2 rounded p-3" alt="..." />
  </div>
</div>
</div>
{historyViews}
</div>

</div>
);
}

}