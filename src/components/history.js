import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// handle button click of login form
async function viewsMovies() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/history/views/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}
async function titleMovies() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/history/title/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export default class History extends Component {

state = { value: 2,moviesViews: [],moviesTitle: [] };

componentDidMount =()=>{
	viewsMovies().then(response => {
	  this.setState({
		moviesViews: [['job one','description one','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job tow','description tow','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job three','description three','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job four','description four','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job five','description five','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg']]
	  });
	});
	titleMovies().then(response => {
	  this.setState({
		moviesTitle: [['job one','description one','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job tow','description tow','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job three','description three','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job four','description four','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job five','description five','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg']]
	  });
	});
}

render() {

const historyViews = this.state.moviesViews.map((element) => 
<div className="col-md-12">
<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
<div className="row no-gutters">
    <div className="col-md-2">
        <img src={element[2]} class="card-img rounded-0" alt="..." />
    </div>
    <div className="col-md-10">
        <div className="card-body">
            <small className="card-title">{element[0]}</small><br />
            <small className="text-muted">{element[1]}</small><br />
            <Link className="btn btn-primary btn-sm position-relative" to={"/interesse/single/" + element[0]} style={{top: "15px"}}>Show more</Link>
        </div>
    </div>
</div>
</div>
</div>
);

const historyTitle = this.state.moviesTitle.map((element) => 
<div className="col-md-12">
<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
<div className="row no-gutters">
    <div className="col-md-2">
        <img src={element[2]} class="card-img rounded-0" alt="..." />
    </div>
    <div className="col-md-10">
        <div className="card-body">
            <small className="card-title">{element[0]}</small><br />
            <small className="text-muted">{element[1]}</small><br />
            <Link className="btn btn-primary btn-sm position-relative" to={"/interesse/single/" + element[0]} style={{top: "15px"}}>Show more</Link>
        </div>
    </div>
</div>
</div>
</div>
);


return (
<div className="container">

<p className="lead text-sm-left">Type of history</p>

<nav className="mb-3">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-view-tab" data-toggle="tab" href="#nav-view" role="tab" aria-controls="nav-cviewontact" aria-selected="true">Job title</a>
    <a class="nav-item nav-link text-muted" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">Company</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">

<div class="tab-pane fade show active" id="nav-view" role="tabpanel" aria-labelledby="nav-view-tab">
{historyViews}
</div>

<div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
{historyTitle}
</div>

</div>

</div>

);
}

}