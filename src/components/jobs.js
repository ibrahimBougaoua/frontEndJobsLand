import React, { Component } from "react";
import axios from 'axios';
import Post from "./post";
import Nav from "./nav";

// handle button click of login form
async function getJobsComapnyAndATitle(company,title) {
    try {
      const response = await axios.get('http://127.0.0.1:5002/job/company/' + company + '/title/' + title);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export default class Jobs extends Component {

state = { titlesByCompany: [] }

componentDidMount = ()=> {
    getJobsComapnyAndATitle(this.props.match.params.company,this.props.match.params.title).then(response => {
        this.setState({
            titlesByCompany: response.data
        });
    });
  }

render() {

return (<div className="container">

<Nav nameOne={this.props.match.params.company} nameTow={this.props.match.params.title}></Nav>


<div className="card mb-4 mt-4 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-2">
			<img src="/undraw_detailed_analysis_xn7y.svg" class="w-100 h-100 mt-2 rounded p-3" alt="..." />
		</div>
		<div className="col-md-10">
			<div className="card-body">
			<h5 className="card-title">Company : { this.props.match.params.company }</h5>
            <p className="card-subtitle text-muted mt-3">Title : {this.props.match.params.title}</p>
  		</div>
		</div>
	</div>
</div>

<Post name="all jobs" link="/single/" elements={this.state.titlesByCompany}></Post>

</div>
);
}

}