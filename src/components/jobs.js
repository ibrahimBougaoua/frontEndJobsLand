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

    getJobsComapnyAndATitle('ddddddd',this.props.match.params.title).then(response => {
        this.setState({
            titlesByCompany: response.data
        });
    });
  }

render() {

return (<div className="container">

<Nav nameOne="company" nameTow={this.props.match.params.title}></Nav>

<Post name="all jobs" link="/single/" elements={this.state.titlesByCompany}></Post>

</div>
);
}

}