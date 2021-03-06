import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Post from "./post";
import Nav from "./nav";

// handle button click of login form
async function singleJob(id) {
    try {
      const response = await axios.get('http://127.0.0.1:5002/job/single/id/' + id + '/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

// handle button click of login form
async function relatedJob(id) {
    try {
      const response = await axios.get('http://127.0.0.1:5002/job/related/id/' + id);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  
// handle button click of login form
async function ifShowLater(id) {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/check/showlater/user/' + localStorage.getItem('email') +'/id/' + id);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default class Single extends Component {

state = { enable: false,name: '',job: [],related: [] };
    
      componentDidMount =()=>{
        ifShowLater(this.props.match.params.id).then(response => {
          console.log('if Show Later : ' +  response.data)
          if(response.data === 'yes'){
            this.setState({
              enable: true
            });
          }
        });
        singleJob(this.props.match.params.id).then(response => {
          this.setState({
            job: response.data
          });
        });
        relatedJob(this.props.match.params.id).then(response => {
          this.setState({
            related: response.data
          });
        });
      }

render() {

// handle button click of login form
const new_show_later = () => {
  axios.get('http://127.0.0.1:5002/job/showlater/new/email/' + localStorage.getItem('email') + '/id/' + this.props.match.params.id)
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
const delete_show_late = () => {
  axios.get('http://127.0.0.1:5002/job/showlater/delete', {params : {_email:  localStorage.getItem('email'),  _id: this.props.match.params.id}})
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

const singleJob = this.state.job.map((element) => 

<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">

	<div className="card-body">
  {
  this.state.enable
    ? <p className="card-text"><button type="submit" className="btn btn-sm btn-secondary disabled float-right position-relative" onClick={delete_show_late}>Already saved</button></p>
    : <p className="card-text"><button type="submit" className="btn btn-sm btn-danger float-right position-relative" onClick={new_show_later}>Intéressé</button></p>
  }
    <h5 className="card-title mb-4">Title : {element[5]}</h5>
    <p className="card-subtitle mb-2 text-muted mb-4">published : {element[1]}</p>
    <p className="card-subtitle text-muted mb-4">Company : <Link to={'/company/' + element[2]} className="btn btn-sm btn-outline-info"> {element[2]}</Link></p>
    <p className="card-subtitle text-muted mb-4">Eligibility : {element[4]}</p>
    <p className="card-subtitle text-muted mb-4">Job Description : {element[6]}</p>
    <p className="card-subtitle text-muted mb-4">Skills : {element[8].split(',').map((element) => <button type="submit" className="btn btn-sm btn-outline-info mr-2" >{element.replace(/'/g, "").replace("[", "").replace("]", "")}</button>)}</p>
    <p className="card-subtitle text-muted">Location : {element[9]}</p>
 
  <button type="button" className="btn btn-sm btn-info mr-2 mt-2 mb-2 float-right position-relative" data-toggle="modal" data-target="#exampleModal" style={{ top: "0vw",left: "1vw" }}>More details</button>
	</div>
	</div>
  
<div className="modal fade bd-example-modal-xl" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">More details</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="card border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
	<div className="col-md-12">
	<div className="card-body bg-white">
    <h5 className="card-title mb-4">Title : {element[5]}</h5>
    <p className="card-subtitle text-muted mb-4">published : {element[1]}</p>
    <p className="card-subtitle text-muted mb-4">Company : <Link to={'/company/' + element[2]} className="btn btn-sm btn-info"> {element[2]}</Link></p>
    <p className="card-subtitle text-muted mb-4">Required Qual : {element[3]}</p>
    <p className="card-subtitle text-muted mb-4">Eligibility : {element[4]}</p>
    <p className="card-subtitle text-muted mb-4">Job Description : {element[6]}</p>
    <p className="card-subtitle text-muted mb-4">Job Requirment : {element[7]}</p>
    <p className="card-subtitle text-muted mb-4">Skills : {element[8].split(',').map((element) => <button type="submit" className="btn btn-sm btn-outline-info mr-2" >{element.replace(/'/g, "").replace("[", "").replace("]", "")}</button>)}</p>
    <p className="card-subtitle text-muted mb-4">Location : {element[9]}</p>
	</div>
	</div>
	</div>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>

);

return (
<div className="container">   

<Nav nameOne="single job"></Nav>

{singleJob}

<Post name="Related Jobs" link="single/" elements={this.state.related}></Post>

</div>
);
}
}