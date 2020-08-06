import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Interesse from "./components/interesse";
import History from "./components/history";
import Abonnements from "./components/abonnements";
import Company from "./components/company";
import Single from "./components/single";
import Jobs from "./components/jobs";

function App() {
 
  return (<div>
    <Router>
    
    <div className="container-fluid m-0 p-0">


<nav class="navbar navbar-expand-lg p-3 navbar-dark shadow-sm">
  <Link className="navbar-brand text-info" style={{padding: "0px 0px 0px 8px",borderStyle: "solid",borderWidth: "0px 0px 1px 2px",borderRadius: "40px 0px 0px 40px"}} to={"/"}>Trouver un travail</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="btn btn-sm btn-outline-info mr-2" to={"/interesse"}>Intéressé</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm btn-outline-info mr-2" to={"/abonnements"}>Abonnements</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm btn-outline-info mr-2" to={"/history"}>Historique</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm btn-outline-info mr-2" to={"/profile"}>Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm btn-outline-info mr-2" to={"/signup"}>S’inscrire</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm btn-outline-info mr-2" to={"/login"}>S’identifier</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm btn-outline-info" to={"/deconnexion"}>Déconnexion</Link>
              </li>
    </ul>
  </div>
</nav>

{ false ?
<div className="mt-5 mb-5">
      <form className="form-inline md-form form-sm mt-0 justify-content-center" method="POST" >
          <input className="form-control form-control-sm" name="search" type="text" placeholder="Search Job title,Company..." aria-label="Search" style={{width:"48vw"}}/>          
          <select name="cate" class="form-control form-control-sm ml-2">
            <option value="title">Job title</option>
            <option value="company">Company</option>
          </select>
          <button className="btn btn-sm btn-outline-info my-sm-0 ml-2" data-toggle="modal" data-target="#exampleModal" type="submit">Search</button>
      </form>
</div>
: null }

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/interesse" exact component={Interesse} />
        <Route path="/history" exact component={History} />
        <Route path="/abonnements" exact component={Abonnements} />
        <Route path="/company/:company" exact component={Company} />
        <Route path="/single/:id" exact component={Single} />
        <Route path="/jobs/:company/:title" exact component={Jobs} />
      </Switch>
          
    </div>
    </Router>
    
    
<footer className="mt-5 bg-info">

<div className="shadow-sm  pt-5 pb-5">
<div className="container">
<div className="col-md-12">
 <div className="row">
  <div className="col-md-4 p-4"> 
    <p className="text-sm-left text-white">About us</p>
    <p className="text-sm-left text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
  </div>
  <div className="col-md-4 p-4"> 
    <p className="text-sm-left text-white">Find a job</p>
    <img src="undraw_job_offers_kw5d.svg" className="w-100 h-100 rounded" alt=""/>
  </div>
  <div className="col-md-4 p-4"> 
      <div className="jumbotron jumbotron-fluid p-0">
          <div className="container">
              <h1 className="display-5 text-center text-white font-weight-bold w-100">Offres d’emploi actives.</h1>
              <p className="lead text-center text-white">Recruteurs actifs.</p>
              <img src="play-button.svg" className="mt-2 rounded position-relative" alt="" style={{width: "5vw",height: "100%",left: "20vw"}}/>
          </div>
      </div>
  </div>
 </div>
</div>
</div>

</div>

<div className="footer-copyright text-center text-white py-3" id="mainNav">© 2020 Copyright :
  <a href="https://datalake.com/" className="text-white"> datalake.com</a>
</div>

</footer>
    
    </div>
  );
}

export default App;