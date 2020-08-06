import React, { Component } from "react";
import axios from 'axios';
import Post from "./post";
import Nav from "./nav";

// handle button click of login form
async function ifAbonner(company) {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/check/abonnement/user/' + localStorage.getItem('email') + '/company/' + company);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function jobsByCompany(company) {
    try {
      const response = await axios.get('http://127.0.0.1:5002/job/abonnements/company/' + company);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

// handle button click of login form
async function getJobTitlesComany(company) {
    try {
      const response = await axios.get('http://127.0.0.1:5002/job/company/titles/' + company);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export default class Company extends Component {

state = { checked: false,enable: false,jobs: [] ,titles: [] }


componentDidMount =()=>{

  ifAbonner(this.props.match.params.company).then(response => {
if(response.data === 'yes'){
  this.setState({
    enable: true
  });
}
  });
    jobsByCompany(this.props.match.params.company).then(response => {
	  this.setState({
		jobs: response.data
	  });
	  console.log('company : ' + this.props.match.params.company)
	});
    getJobTitlesComany(this.props.match.params.company).then(response => {
        this.setState({
            titles: response.data
        });
    });
  }


render() {

// handle button click of login form
const new_Abonnement = () => {
    axios.get('http://127.0.0.1:5002/job/abonnement/new/email/' +  localStorage.getItem('email') + '/company/' +  this.props.match.params.company)
    .then(function (response) {
      // setter
      //const token = localStorage.setItem('token', response.data.access_token)
      //const user = localStorage.setItem('user', response.data.user)
      // route for profile
      console.log(response)

    }).catch(function (error) {
      console.log('ibrahim => ' + error);
    });

}


// handle button click of login form
const delete_Abonnement = () => {
    axios.get('http://127.0.0.1:5002/job/abonnement/delete', {params : {_email:  localStorage.getItem('email'),  _company: this.props.match.params.company}})
    .then(function (response) {
      // setter
      //const token = localStorage.setItem('token', response.data.access_token)
      //const user = localStorage.setItem('user', response.data.user)
      // route for profile
      console.log(response)

    }).catch(function (error) {
      console.log('ibrahim => ' + error);
    });
}

const jobsTitltes = this.state.titles.map((element) => 
<button className="btn btn-sm btn-outline-info m-1">{element}</button>
);

return (<div className="container">

<Nav nameOne="company" nameTow={this.props.match.params.company}></Nav>

<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-3">
			<img src="/undraw_business_decisions_gjwy.svg" class="w-100 h-100 mt-2 rounded p-3" alt="..." />
		</div>
		<div className="col-md-9">
			<div className="card-body">
			<h5 className="card-title">{ this.props.match.params.company }</h5>
            
{
  this.state.enable
    ? <p className="card-text"><button type="submit" className="btn btn-sm btn-secondary disabled float-right position-relative" onClick={delete_Abonnement} style={{bottom:"40px"}}>s'abonner</button></p>
    : <p className="card-text"><button type="submit" className="btn btn-sm btn-danger float-right position-relative" onClick={new_Abonnement} style={{bottom:"40px"}}>s'abonner</button></p>
  }    

<p className="card-subtitle text-muted mb-4">Jobs : {jobsTitltes}</p>

  		</div>
		</div>
	</div>
</div>

<Post name="all jobs" link="/single/" elements={this.state.jobs}></Post>

</div>
);
}

}