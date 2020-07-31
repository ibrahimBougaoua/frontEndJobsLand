import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

// handle button click of login form
async function listJo() {
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
        listMovies().then(response => {
          this.setState({
            movies: [['job one','description one','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job tow','description tow','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job three','description three','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job four','description four','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg'],['job five','description five','https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg']]
          });
        });
      }

render() {

const list = this.state.jobs.map((element) => 
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
    <div>

    <div className="container">

    <p className="lead text-sm-left">interesse</p>

    <div className="row">
    {list}
    </div>

    </div>

    </div>
);
}
}