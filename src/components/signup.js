import React, { Component } from "react";
import axios from 'axios';
import MultiSelect from "@khanacademy/react-multi-select";

const optionsM = [
{label: "Java Developer", value: "Java Developer"},            
{label: "Software Developer", value: "Software Developer"},         
{label: "Software Engineer", value: "Software Engineer"},          
{label: "Web Developer", value: "Web Developer"},              
{label: "PHP Developer", value: "PHP Developer"},              
{label: "Graphic Designer", value:  "Graphic Designer"},           
{label: "Software QA Engineer", value: "Software QA Engineer"},       
{label: ".NET Developer", value: ".NET Developer"},             
{label: "Android Developer", value: "Android Developer"},          
{label: "Database Admin/Dev", value: "Database Admin/Dev"},         
{label: "Programmer", value: "Programmer"},                 
{label: "IT Specialist", value: "IT Specialist"},              
{label: "iOS Developer", value: "iOS Developer"},              
{label: "Senior Web Developer", value: "Senior Web Developer"},       
{label: "Java Software Developer", value: "Java Software Developer"},    
{label: "Network Administrator", value: "Network Administrator"},      
{label: "Software Engineer", value: "Software Engineer"},          
{label: "C++ Software Developer", value: "C++ Software Developer"},     
{label: "Credit Specialist", value: "Credit Specialist"},          
{label: "IT Manager", value: "IT Manager"},                 
{label: "ASP.NET Developer", value: "ASP.NET Developer"},
];

const optionsS = [
{label: '.Net', value: "imax"},
{label: '3G', value: "imax"},
{label: 'ACH', value: "imax"},
{label: 'AI', value: "imax"},
{label: 'AJAX', value: "imax"},
{label: 'Accounting', value: "imax"},
{label: 'Active Directory', value: "imax"},
{label: 'Adobe InDesign', value: "imax"},
{label: 'Adobe Photoshop', value: "imax"},
{label: 'Agriculture', value: "imax"},
{label: 'Android', value: "imax"},
{label: 'Angular', value: "imax"},
{label: 'Ant', value: "imax"},
{label: 'Apache', value: "imax"},
{label: 'Azure', value: "imax"},
{label: 'BGP', value: "imax"},
{label: 'Bootstrap', value: "imax"},
{label: 'Business Analysis', value: "imax"},
{label: 'C#', value: "imax"},
{label: 'C/C++', value: "imax"},
{label: 'CAD', value: "imax"},
{label: 'CCNA', value: "imax"},
{label: 'CCNP', value: "imax"},
{label: 'CI', value: "imax"},
{label: 'CSS', value: "imax"},
{label: 'Cassandra', value: "imax"},
{label: 'CentOS', value: "imax"},
{label: 'Cisco Routers', value: "imax"},
{label: 'CompTIA Network+', value: "imax"},
{label: 'Content Management Systems', value: "imax"},
{label: 'Crystal Reports', value: "imax"},
{label: 'DB2', value: "imax"},
{label: 'DHCP', value: "imax"},
{label: 'DNS', value: "imax"},
{label: 'Database Administration', value: "imax"},
{label: 'Design Patterns', value: "imax"},
{label: 'Digital Marketing', value: "imax"},
{label: 'Drupal', value: "imax"},
{label: 'E-Commerce', value: "imax"},
{label: 'Eclipse', value: "imax"},
{label: 'Elasticsearch', value: "imax"},
{label: 'Ember', value: "imax"},
{label: 'Erlang', value: "imax"},
{label: 'Excel', value: "imax"},
{label: 'FTP', value: "imax"},
{label: 'Firewall', value: "imax"},
{label: 'GIS', value: "imax"},
{label: 'Git', value: "imax"},
{label: 'Go', value: "imax"},
{label: 'Google Analytics', value: "imax"},
{label: 'HBase', value: "imax"},
{label: 'HTML5', value: "imax"},
{label: 'HTTPS', value: "imax"},
{label: 'Hadoop', value: "imax"},
{label: 'Hibernate', value: "imax"},
{label: 'IIS', value: "imax"},
{label: 'ITIL', value: "imax"},
{label: 'IVR', value: "imax"},
{label: 'JBoss', value: "imax"},
{label: 'JSON', value: "imax"},
{label: 'Java', value: "imax"},
{label: 'JavaScript', value: "imax"},
{label: 'Kanban', value: "imax"},
{label: 'Linux', value: "imax"},
{label: 'Lucene', value: "imax"},
{label: 'MCITP', value: "imax"},
{label: 'MCSA', value: "imax"},
{label: 'MCSD', value: "imax"},
{label: 'MCSE', value: "imax"},
{label: 'Mac OS', value: "imax"},
{label: 'Magento', value: "imax"},
{label: 'Marketing', value: "imax"},
{label: 'Marketing Automation', value: "imax"},
{label: 'Marketo', value: "imax"},
{label: 'Maven', value: "imax"},
{label: 'Maya', value: "imax"},
{label: 'Microsoft Access', value: "imax"},
{label: 'Microsoft Office', value: "imax"},
{label: 'Microsoft SQL Server', value: "imax"},
{label: 'Microsoft Windows Server', value: "imax"},
{label: 'MongoDB', value: "imax"},
{label: 'MySQL', value: "imax"},
{label: 'NFS', value: "imax"},
{label: 'Network', value: "imax"},
{label: 'Network Engineering', value: "imax"},
{label: 'NoSQL', value: "imax"},
{label: 'Node.js', value: "imax"},
{label: 'OOP', value: "imax"},
{label: 'OSPF', value: "imax"},
{label: 'Objective-C', value: "imax"},
{label: 'Oracle', value: "imax"},
{label: 'PCI', value: "imax"},
{label: 'PHP', value: "imax"},
{label: 'PL/SQL', value: "imax"},
{label: 'Perforce', value: "imax"},
{label: 'Perl', value: "imax"},
{label: 'PostGIS', value: "imax"},
{label: 'PostgreSQL', value: "imax"},
{label: 'PowerShell', value: "imax"},
{label: 'Project Implementation', value: "imax"},
{label: 'Python', value: "imax"},
{label: 'R', value: "imax"},
{label: 'REST', value: "imax"},
{label: 'RN', value: "imax"},
{label: 'React', value: "imax"},
{label: 'Redis', value: "imax"},
{label: 'Ruby', value: "imax"},
{label: 'S3', value: "imax"},
{label: 'SAP', value: "imax"},
{label: 'SAS', value: "imax"},
{label: 'SDLC', value: "imax"},
{label: 'SEO', value: "imax"},
{label: 'SOAP', value: "imax"},
{label: 'SPSS', value: "imax"},
{label: 'SQL', value: "imax"},
{label: 'SQLite', value: "imax"},
{label: 'SSH', value: "imax"},
{label: 'SSL', value: "imax"},
{label: 'SVN', value: "imax"},
{label: 'SaaS', value: "imax"},
{label: 'Scala', value: "imax"},
{label: 'Scripting', value: "imax"},
{label: 'Selenium', value: "imax"},
{label: 'Service-Oriented Architecture', value: "imax"},
{label: 'SharePoint', value: "imax"},
{label: 'Software Development', value: "imax"},
{label: 'Software Testing', value: "imax"},
{label: 'Spring', value: "imax"},
{label: 'Struts', value: "imax"},
{label: 'Swift', value: "imax"},
{label: 'Sybase', value: "imax"},
{label: 'System Administration', value: "imax"},
{label: 'T-SQL', value: "imax"},
{label: 'TCP', value: "imax"},
{label: 'TCP/IP', value: "imax"},
{label: 'TFS', value: "imax"},
{label: 'Technical Support', value: "imax"},
{label: 'Telecommunication', value: "imax"},
{label: 'Threading', value: "imax"},
{label: 'Tomcat', value: "imax"},
{label: 'Troubleshooting', value: "imax"},
{label: 'UI', value: "imax"},
{label: 'UX', value: "imax"},
{label: 'Ubuntu', value: "imax"},
{label: 'Unit Testing', value: "imax"},
{label: 'VMWare', value: "imax"},
{label: 'Visio', value: "imax"},
{label: 'Visual Basic', value: "imax"},
{label: 'Visual Studio', value: "imax"},
{label: 'Web Development', value: "imax"},
{label: 'WebSphere', value: "imax"},
{label: 'Windows', value: "imax"},
{label: 'WordPress', value: "imax"},
{label: 'XML', value: "imax"},
{label: 'XSLT', value: "imax"},
{label: 'Xero', value: "imax"},
{label: 'iOS', value: "imax"},
];

export default class Signup extends Component {
    
    constructor(props) {
        super(props);
        this.state = {fisrtname: '',lastname: '',email: '',password: '',sexe: 'male',age: 15,country: 'NC',telephone: '',errorMessage: '',selectedM: [],selectedS: []};
        
        this.handleChangeFisrtname = this.handleChangeFisrtname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeSexe = this.handleChangeSexe.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangeTelephone = this.handleChangeTelephone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeFisrtname(event) {
        this.setState({fisrtname: event.target.value});
      }

      handleChangeLastname(event) {
        this.setState({lastname: event.target.value});
      }
    
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    
      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }

      handleChangeSexe(event) {
        this.setState({sexe: event.target.options[event.target.selectedIndex].value});
      }

      handleChangeAge(event) {
        this.setState({age: event.target.options[event.target.selectedIndex].value});
      }

      handleChangeCountry(event) {
        this.setState({country: event.target.options[event.target.selectedIndex].value});
      }

      handleChangeTelephone(event) {
        this.setState({telephone: event.target.value});
      }
      
      handleSubmit(event) {
        event.preventDefault();
      }

    render() {

    const {selectedM} = this.state;
    const {selectedS} = this.state;

// handle button click of signin form
const handleSignin = () => {
    axios.get('http://127.0.0.1:5000/movie/singup/', {params : {fisrtname : this.state.fisrtname,lastname : this.state.lastname,email : this.state.email,password : this.state.password,sexe : this.state.sexe,age : this.state.age,country : this.state.country,telephone : this.state.telephone,tags : this.state.selected.toString()}})
    .then(response =>  {
      // setter
      //this.setState({errorMessage: response.data});
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('email', response.data.email)
      // route for profile
      //window.location.replace("/account")
      console.log(response.data)
    }).catch(error => {
      this.setState({errorMessage: 'username or password is wrong !'});
    });
}

const country = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovi","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Côte d'Ivoire","Cabo Verde","Cambodia","Cameroon","Canada","Central African Repuc","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzave)","Costa Rica","Croatia","Cuba","Cyprus","Czechia (Czech Repub)","Democratic Republic the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevi","Saint Lucia","Saint Vincent and threnadines","Samoa","San Marino","Sao Tome and Princip","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of Amea","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe","Afghanistan"]

const ages = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]


const listCountry = country.map((element) =>
    <option value={element}>{element}</option>
);

const listAge = ages.map((element) =>
    <option value={element}>{element}</option>
);


return (
<div className="container mt-2 mb-5 mt-5">
    <div className="row justify-content-center position-relative">
        <div className="col-md-12">
            <div className="card border-0 shadow">

              { this.state.errorMessage && <div class="alert alert-danger" role="alert">{ this.state.errorMessage }</div> }

                <div className="card-header border-0 bg-dark text-light">Register</div>

                <div className="card-body">
                    <form method="POST" onSubmit={this.handleSubmit}>
                    <div class="form-row">
                        <div className="form-group  col-md-6">
                            <label for="name">FirstName</label>
                            <input id="name" type="text" value={this.state.fisrtname} onChange={this.handleChangeFisrtname} className="form-control" name="name" />
                        </div>
                        <div className="form-group  col-md-6">
                            <label for="name">LastName</label>
                            <input id="name" type="text" value={this.state.lastname} onChange={this.handleChangeLastname} className="form-control" name="name" />
                        </div>
                        <div className="form-group  col-md-6">
                            <label for="email">E-Mail Address</label>
                            <input id="email" type="email" value={this.state.email} onChange={this.handleChangeEmail} className="form-control" name="email" />
                        </div>
                        <div className="form-group  col-md-6">
                            <label for="password">Password</label>
                            <input id="password" type="password" value={this.state.password} onChange={this.handleChangePassword} className="form-control" name="password" />
                        </div>

                        <div className="form-group  col-md-6">
                            <label for="name">Majors</label>
                            <MultiSelect options={optionsM} selected={selectedM} onSelectedChanged={selectedM => this.setState({selectedM})} />
                        </div>

                        <div className="form-group  col-md-6">
                            <label for="name">Skills</label>
                            <MultiSelect options={optionsS} selected={selectedS} onSelectedChanged={selectedS => this.setState({selectedS})} />
                        </div>

                        <div className="form-group  col-md-6">
                            <label for="name">Sex</label>
                            <select name="sexe" class="form-control" value={this.state.sexe} onChange={this.handleChangeSexe}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>

                        <div className="form-group  col-md-6">
                            <label for="name">Age</label>
                            <select name="age" class="form-control" value={this.state.age} onChange={this.handleChangeAge}>
                                {listAge}
                            </select>
                        </div>

                        <div className="form-group  col-md-6">
                            <label for="name">Country</label>
                            <select name="country" class="form-control" value={this.state.country} onChange={this.handleChangeCountry}>
                                {listCountry}
                            </select>
                        </div>
                        <div className="form-group  col-md-6">
                            <label for="name">Telephone</label>
                            <input id="name" type="text" value={this.state.telephone} onChange={this.handleChangeTelephone} className="form-control" name="name" />
                        </div>

                        <div className="form-group  col-md-12">
                            <button type="submit" className="btn btn-primary" onClick={handleSignin}>Register</button>
                        </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}