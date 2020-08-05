import React, { Component } from "react";
import Post from "./post";
import { Link } from "react-router-dom";
import Nav from "./nav";

import axios from 'axios';

// handle button click of login form
async function companies() {
    try {
      const response = await axios.get('http://127.0.0.1:5002/job/abonnements/user/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

// handle button click of login form
async function jobs() {
    try {
      const response = await axios.get('http://127.0.0.1:5002/job/abonnements/alljobs/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

export default class Abonnement extends Component {

    state = {
        companies: [],
        jobs: []
      }
    
      componentDidMount =()=>{
        companies().then(response => {
          this.setState({
            companies: response.data
          });
        });
        jobs().then(response => {
          this.setState({
            jobs: response.data
          });
        });
      }

render() {

	const companies = this.state.companies.map((element) => 
    <div className="col-md-4">
    <div className="card mb-5 border-0 rounded-0 shadow-sm p-3 bg-light">
	<div className="row no-gutters">
		<div className="col-md-4">
            <img src="/undraw_business_decisions_gjwy.svg" class="w-100 h-100 mt-2 rounded" alt="..." />
		</div>
		<div className="col-md-8">
			<div className="pl-2">
                <p className="text-sm-left">{element}</p>
                <Link className="btn btn-info btn-sm position-relative float-right mr-3" to={"/company/" + element} style={{bottom: "3px"}}>Show more</Link>
			</div>
		</div>
	</div>
    </div>
    </div>
	
	);


return (
    <div className="container mt-3">

    <Nav nameOne="abonnements"></Nav>

    <div className="row mt-4">
    {companies}
    </div>
        
    <Post name="jobs" link="/single/" elements={this.state.jobs}></Post>

    </div>

);
}
}