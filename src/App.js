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

function App() {
 
  return (<div>
    <Router>
    
    <div className="container-fluid m-0 p-0">


<nav class="navbar navbar-expand-lg navbar-dark shadow-sm">
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
      <form className="form-inline md-form form-sm mt-0 p-2 justify-content-center" method="POST" >
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
      </Switch>
          
    </div>
    </Router>
    
    
<footer className="font-small unique-color-dark mt-5" style={{backgroundColor: "#5f63bd"}}>

<div className="col-md-12">
 <div className="row">
  <div className="col-md-3 p-4"> 
    <p className="text-sm-left text-white">About us</p>
    <p className="text-sm-left text-white">Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes.</p>
  </div>
  <div className="col-md-3 p-4"> 
    <p className="text-sm-left text-white">Jobs</p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
    <p className="btn btn-outline-info btn-sm mr-2"><Link className="text-white" to={"/Job"} >Job</Link></p>
  </div>
  <div className="col-md-6 p-4"> 
      <div className="jumbotron jumbotron-fluid p-0">
          <div className="container">
              <h1 className="display-4 text-center text-white font-weight-bold">Offres d’emploi actives.</h1>
              <p className="lead text-center text-white">Recruteurs actifs.</p>
              <img src="play-button.svg" className="mt-2 rounded position-relative" alt="" style={{width: "5vw",height: "100%",left: "20vw"}}/>
          </div>
      </div>
  </div>
 </div>
</div>

<div className="footer-copyright text-center text-white py-3" id="mainNav">© 2020 Copyright:
  <a href="https://datalake.com/" className="text-white"> datalake.com</a>
</div>

</footer>
    
    </div>
  );
}

export default App;