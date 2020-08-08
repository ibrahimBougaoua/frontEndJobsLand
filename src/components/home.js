import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Post from "./post";
import Resultat from "./resultat";

// handle button click of login form
async function recommendedMajors() {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/recommended/majors/' + localStorage.getItem("email"));
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function recommendedSkills() {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/recommended/skills/' + localStorage.getItem("email"));
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function recommendedCity() {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/recommended/city/MA');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function resultat(value,cate) {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/search/?search=' + value + '&cate=' + cate + '&email=' + localStorage.getItem('email'))
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function RecherchesRecentesJobSkills() {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/search/recentes/skills/' + localStorage.getItem('email'))
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function RecherchesRecentesJobMajors() {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/search/recentes/majors/' + localStorage.getItem('email'))
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function RecherchesRecentesJobCity() {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/search/recentes/city/' + localStorage.getItem('email'))
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {visible: false,all: [],value: '',cate: 'skills',majors: [],skills: [],city: [],searchDataJobs: [],recentesJobSkills: [],recentesJobMajors: [],recentesJobCity: []};
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleChangeCate = this.handleChangeCate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeValue(event) {
    this.setState({value: event.target.value});
  }

  handleChangeCate(event) {
    this.setState({cate: event.target.options[event.target.selectedIndex].value});
  }
  
handleSubmit(event) {
console.log('value : ' + this.state.value)
console.log('cate : ' + this.state.cate)
resultat(this.state.value,this.state.cate).then(response => {
  this.setState({
    searchDataJobs: response.data
  });
  this.setState({
    visible: true
  });
});
event.preventDefault();
}

  componentDidMount = () => {
    recommendedMajors().then(response => {
	  this.setState({
      majors: response.data
  	});
	  });
    recommendedSkills().then(response => {
	  this.setState({
      skills: response.data
  	});
	  });
    recommendedCity().then(response => {
	  this.setState({
      city: response.data
  	});
	  });
    RecherchesRecentesJobSkills().then(response => {
	  this.setState({
      recentesJobSkills: response.data
  	});
	  });
    RecherchesRecentesJobMajors().then(response => {
	  this.setState({
      recentesJobMajors: response.data
  	});
	  });
    RecherchesRecentesJobCity().then(response => {
	  this.setState({
      recentesJobCity: response.data
  	});
	  });
  }

render() {
// handle button click of signin form
const handleSearch = () => {
      //axios.get('http://127.0.0.1:5002/job/search/?search=' + this.state.value + '&cate=' + this.state.cate + '&email=' + localStorage.getItem('email')).then(function (response) {
      //console.log(response)
      //}).catch(function (error) {
      //console.log(error);
      //});
}

const country = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovi","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Côte d'Ivoire","Cabo Verde","Cambodia","Cameroon","Canada","Central African Repuc","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzave)","Costa Rica","Croatia","Cuba","Cyprus","Czechia (Czech Repub)","Democratic Republic the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevi","Saint Lucia","Saint Vincent and threnadines","Samoa","San Marino","Sao Tome and Princip","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of Amea","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe","Afghanistan"]
const listCountry = country.map((element) =>
        <option value={element}>{element}</option>
);

const ages = [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]
const listAge = ages.map((element) =>
    <option value={element}>{element}</option>
);

const sugg  = ["Ingénierie","Développement commercial","Finance","Adjoint administratif","Vendeur","Service clients","Exploitation","Technologies de l’information","Marketing","Ressources humaines","Services de la santé","Ventes","Gestion de projets et de programmes","Comptabilité","Arts et design","Services à la communauté et Services sociaux","Consulting","Formation","Entrepreneuriat","Service juridique","Médias et communications","Armée et services de protection","Gestion produit","Achats","Contrôle qualité","Immobilier","Recherche","Assistance","Administration"]
const listSugg = sugg.map((element) =>
<Link className="btn btn-outline-light btn-lg m-1" to={this.props.path + element}>{element}</Link>
);


return (
<div className="container-fluid m-0 p-0">

    <div className="row justify-content-center mt-5 mb-5">

        <div className="col-md-12">    
              
                <div className="container">
                  <div className="row">
                      
                    <div className="col-md-5">
                    
                <h1 className="display-5 text-info font-weight-bold ml-3 w-100">Offres d’emploi actives.</h1>
                <p className="lead text-info ml-3">Recruteurs actifs.</p>

                <form className="mt-4" method="POST" onSubmit={this.handleSubmit}>
          
          <div className="form-group col-md-12">
              <input className="form-control form-control-lg" name="search" type="text" onChange={this.handleChangeValue} value={this.state.value} placeholder="Rechercher by skills,Majors,company" aria-label="Search" />          
          </div>    
          
          <div className="form-group col-md-12">
        <select name="cate" class="form-control" value={this.state.cate} onChange={this.handleChangeCate}>
  <option value="skills">Skills</option>
  <option value="majors">Majors</option>
  <option value="city">City</option>
</select>
          </div>

          <div className="form-group col-md-6 ml-0">
              <button className="btn btn-lg btn-outline-info my-lg-0" data-toggle="modal" data-target="#exampleModal" type="submit" onClick={handleSearch}>Search</button>
          </div>
    
          </form>

          <img src="undraw_people_search_wctu.svg" className="w-50 h-50 mt-2 rounded position-relative float-left ml-2" style={{bottom: "1.5em"}} alt=""/>

                    </div>
                    <div className="col-md-7">
                    <img src="undraw_interview_rmcf.svg" className="w-100 h-100 rounded" alt=""/>
                    </div>

{
  this.state.visible
    ? <div className="modal fade bd-example-modal-xl" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Searching...</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="card border-0 rounded-0 shadow-sm bg-light">
  <div className="row no-gutters">
  <div className="col-md-12">
    
  <Resultat link="/single/" elements={this.state.searchDataJobs}></Resultat>

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
    : null
}




                    </div>
                </div>
        </div>
        </div>

<div className="row mt-5 mb-3">
    <div className="col-md-12 bg-info">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-5 text-center text-white font-weight-bold">Publiez votre offre d’emploi et trouvez les personnes dont vous avez besoin.</h1>
                </div>
            </div>
    </div>
</div>




      <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">

              <h3 className="load float-left font-weight-bold text-info">Recherches récentes</h3>
              <button type="submit" className="btn btn-outline-info float-right">Effacer</button>

<ul class="list-group float-left mt-3 w-100">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    job exmple one
    <span class="badge badge-info badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    job exmple tow
    <span class="badge badge-info badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    job exmple three
    <span class="badge badge-info badge-pill">1</span>
  </li>
</ul>

            </div>
            <div className="col-md-6">
              <img src="undraw_reading_list_4boi.svg" className="w-100 h-50 mt-2 rounded" alt=""/>
            </div>
        </div>
      </div>











        <div className="container">    
        <Post name="Recommended by Majors" link="single/" elements={this.state.majors}></Post>
        <Post name="Recommended by Skills" link="single/" elements={this.state.skills}></Post>
        <Post name="Recommended by City" link="single/" elements={this.state.city}></Post>
        </div>

        <div className="col-md-12 bg-info">    
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center text-white font-weight-bold">Trouvez des postes ou des stages à pourvoir</h1>
                    <p className="lead text-center text-white">SUGGESTIONS DE RECHERCHES</p>
                    {listSugg}
                </div>
            </div>
        </div>


</div>
);
}
}