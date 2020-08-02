import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// handle button click of login form
async function recommendedMajors() {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/recommended/majors/Java Developer');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {all: [],value: '',cate: 'skills',majors: []};
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
event.preventDefault();
}

  componentDidMount = () => {
    recommendedMajors().then(response => {
	  this.setState({
      majors: response.data
  	});
	  });
  }

render() {
// handle button click of signin form
const handleSearch = () => {
      axios.get('http://127.0.0.1:5002/job/search/?search=' + this.state.value + '&cate=' + this.state.cate + '&email=' + localStorage.getItem('email')).then(function (response) {
      console.log(response)
      }).catch(function (error) {
      console.log(error);
      });
}

const recommendedByMajors = this.state.majors.map((element) =>
      <b>{element[0]}</b>
);

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
{recommendedByMajors}
{this.state.majors}
{ false ?
    <div className="m-0 p-0">    
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center text-primary font-weight-bold mt-5">Offres d’emploi actives.</h1>
                <p className="lead text-center text-primary">Recruteurs actifs.</p>
                <div class="row">
                    <div class="col-md-10 offset-md-2"><img src="https://38jr5u32lye82j9kce2xsl7a-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/Footer-man.svg" className="w-75 h-75" alt=""/></div>
                </div>
            </div>
        </div>
    </div>
 : null }
 
    <div className="row justify-content-center">

        <div className="col-md-12">    
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <div className="row">
                      
                    <div className="col-md-5">
                    <form method="POST" onSubmit={this.handleSubmit}>
          
          <div className="form-group col-md-12">
              <input className="form-control form-control-lg" name="search" type="text" onChange={this.handleChangeValue} value={this.state.value} placeholder="Rechercher by skills,Majors,company" aria-label="Search" />          
          </div>    
          
          <div className="form-group col-md-12">
        <select name="cate" class="form-control" value={this.state.cate} onChange={this.handleChangeCate}>
  <option value="skills">Skills</option>
  <option value="majors">Majors</option>
  <option value="company">Company</option>
</select>
          </div>

          <div className="form-group col-md-6 ml-0">
              <button className="btn btn-lg btn-outline-info my-lg-0" data-toggle="modal" data-target="#exampleModal" type="submit" onClick={handleSearch}>Search</button>
          </div>
    
          </form>
                    </div>
                    <div className="col-md-7">
                    <img src="background.png" className="w-100 h-100 mt-2 rounded" alt=""/>
                    </div>
                    </div>
                </div>
            </div>
        </div>



    <div className="col-md-12 banner mt-0">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-5 text-center text-white font-weight-bold">Publiez votre offre d’emploi et trouvez les personnes dont vous avez besoin.</h1>
                </div>
            </div>
    </div>


        <div className="col-md-12">    
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h3 className="load float-left font-weight-bold">Recherches récentes</h3>
                    <button type="submit" className="btn btn-primary float-right">Effacer</button>
                </div>
                <div class="col-md-8 offset-md-2">
                    <ul class="list-group mt-3">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    job exmple one
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    job exmple tow
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    job exmple three
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul>
</div>
                </div>

                </div>
            </div>
        </div>

        <div className="col-md-12 banner">    
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center text-white font-weight-bold">Trouvez des postes ou des stages à pourvoir</h1>
                    <p className="lead text-center text-white">SUGGESTIONS DE RECHERCHES</p>
                    {listSugg}
                </div>
            </div>
        </div>

        <div className="col-md-12">    
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    
<div class="card-deck">
  <div className="card">
    <img src="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h6 className="card-title">Web, Mobile & Software Dev</h6>
    </div>
  </div>
  <div className="card">
    <img src="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h6 className="card-title">Design & Creative</h6>
    </div>
  </div>
  <div className="card">
    <img src="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h6 className="card-title">Writing</h6>
    </div>
  </div>
  <div className="card">
    <img src="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h6 className="card-title">Sales & Marketing</h6>
    </div>
  </div>
</div>

<div class="card-deck mt-4">
  <div className="card">
    <img src="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h6 className="card-title">Admin Support</h6>
    </div>
  </div>
  <div className="card">
    <img src="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h6 className="card-title">Customer Service</h6>
    </div>
  </div>
  <div className="card">
    <img src="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h6 className="card-title">Data Science & Analytics</h6>
    </div>
  </div>
  <div className="card">
    <img src="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?cs=srgb&dl=person-writing-on-white-paper-3815585.jpg&fm=jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h6 className="card-title">Engineering & Architecture</h6>
    </div>
  </div>
</div>

</div>

            </div>
        </div>



        <div className="col-md-12">    
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <p className="lead">Emploi recommandé par salaire</p>

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
            </div>
        </div>

<div className="col-md-12">    
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <p className="lead">Emploi recommandé par localisation</p>


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
    </div>
</div>

<div className="col-md-12">    
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <p className="lead">Emploi recommandé par cv</p>


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
    </div>
</div>





    </div>
</div>
);
}
}