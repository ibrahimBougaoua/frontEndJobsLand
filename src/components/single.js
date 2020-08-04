import React, { Component } from "react";
import BeautyStars from 'beauty-stars';
import axios from 'axios';

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

state = { enable: false,job: [],related: [] };
    
      componentDidMount =()=>{
        ifShowLater(this.props.match.params.id).then(response => {
          console.log(response.data)
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
    <h5 className="card-title">Service Specialist I or II</h5>
    <h6 className="card-subtitle mb-2 text-muted">Idaho Power Company</h6>
    <p className="card-text">Dependent upon location may pay bills, maintain office supply inventory, deposit meter specialist collections, act as Record Retention Coordinator, maintain…</p>

  {
  this.state.enable
    ? <p className="card-text"><button type="submit" className="btn btn-sm btn-secondary disabled float-right position-relative" onClick={delete_show_late} style={{ bottom: "9vw" }}>already saved</button></p>
    : <p className="card-text"><button type="submit" className="btn btn-sm btn-danger float-right position-relative" onClick={new_show_later} style={{ bottom: "9vw" }}>interesse</button></p>
  }
	<small className="text-muted">{element[6]}</small><br />
	<small className="text-muted">{element[11]}</small><br />
  <button type="button" className="btn btn-sm btn-info mr-2 mt-2 mb-2 float-right position-relative" data-toggle="modal" data-target="#exampleModal" style={{ top: "0vw",left: "1vw" }}>More details</button>
	<BeautyStars className="text-sm" value={this.state.value} onChange={value => {this.setState({ value });rating(value,this.props.match.params.id);}} />
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
	<div className="col-md-3">
		<img src={element[13]} class="card-img rounded-0" alt="..." />
	</div>
	<div className="col-md-9">
	<div className="card-body">
	<h5 className="card-title">{element[3]}</h5>
	<small className="text-muted"><b>released : </b>{element[4]}</small><br />
	<small className="text-muted"><b>year : </b>{element[5]}</small><br />
	<small className="text-muted"><b>runtime : </b>{element[6]}</small><br />
	<small className="text-muted"><b>director : </b>{element[8]}</small><br />
	<small className="text-muted"><b>writer : </b>{element[9]}</small><br />
	<small className="text-muted"><b>plot : </b>{element[11]}</small><br />
	<small className="text-muted"><b>country : </b>{element[12]}</small><br />
	<small className="text-muted"><b>production : </b>{element[15]}</small><br />
	<small className="text-muted"><b>boxOffice : </b>{element[16]}</small><br />
	<small className="text-muted"><b>views : </b>{element[17]}</small><br />
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

{singleJob}



<p className="lead">Related Jobs</p>


<div className="row">
<div className="col-md-12">
<div class="card-group">
<div className="card border-0 mr-2 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
<h5 className="card-title">Service Specialist I or II</h5>
<h6 className="card-subtitle mb-2 text-muted">Idaho Power Company</h6>
<p className="card-text">Dependent upon location may pay bills, maintain office supply inventory, deposit meter specialist collections, act as Record Retention Coordinator, maintain…</p>
<a href="a" className="card-link btn btn-sm btn-outline-primary">Read more</a>
</div>
</div>
<div className="card border-0 mr-2 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
<h5 className="card-title">Service Specialist I or II</h5>
<h6 className="card-subtitle mb-2 text-muted">Idaho Power Company</h6>
<p className="card-text">Dependent upon location may pay bills, maintain office supply inventory, deposit meter specialist collections, act as Record Retention Coordinator, maintain…</p>
<a href="a" className="card-link btn btn-sm btn-outline-primary">Read more</a>
</div>
</div>
<div className="card border-0 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
<h5 className="card-title">Service Specialist I or II</h5>
<h6 className="card-subtitle mb-2 text-muted">Idaho Power Company</h6>
<p className="card-text">Dependent upon location may pay bills, maintain office supply inventory, deposit meter specialist collections, act as Record Retention Coordinator, maintain…</p>
<a href="a" className="card-link btn btn-sm btn-outline-primary">Read more</a>
</div>
</div>

</div>
</div>
<div className="col-md-12">
<div class="card-group">
<div className="card border-0 mr-2 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
<h5 className="card-title">Service Specialist I or II</h5>
<h6 className="card-subtitle mb-2 text-muted">Idaho Power Company</h6>
<p className="card-text">Dependent upon location may pay bills, maintain office supply inventory, deposit meter specialist collections, act as Record Retention Coordinator, maintain…</p>
<a href="a" className="card-link btn btn-sm btn-outline-primary">Read more</a>
</div>
</div>
<div className="card border-0 mr-2 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
<h5 className="card-title">Service Specialist I or II</h5>
<h6 className="card-subtitle mb-2 text-muted">Idaho Power Company</h6>
<p className="card-text">Dependent upon location may pay bills, maintain office supply inventory, deposit meter specialist collections, act as Record Retention Coordinator, maintain…</p>
<a href="a" className="card-link btn btn-sm btn-outline-primary">Read more</a>
</div>
</div>
<div className="card border-0 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
<h5 className="card-title">Service Specialist I or II</h5>
<h6 className="card-subtitle mb-2 text-muted">Idaho Power Company</h6>
<p className="card-text">Dependent upon location may pay bills, maintain office supply inventory, deposit meter specialist collections, act as Record Retention Coordinator, maintain…</p>
<a href="a" className="card-link btn btn-sm btn-outline-primary">Read more</a>
</div>
</div>

</div>
</div>

</div>

</div>
);
}
}