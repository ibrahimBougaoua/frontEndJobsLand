import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

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
<div className="col-md-12">
<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
<div className="row no-gutters">
    <div className="col-md-10">
        <div className="card-body">
            <small className="card-title">{element[5]}</small><br />
            <small className="text-muted">{element[2]}</small><br />
            <Link className="btn btn-primary btn-sm position-relative" to={"/single/" + element[10]} style={{top: "15px"}}>Show more</Link>
        </div>
    </div>
</div>
</div>
</div>
);

return (
<div className="container">

<p className="lead text-sm-left">history</p>

<div class="col-md-12">
{historyViews}
</div>

</div>
);
}

}