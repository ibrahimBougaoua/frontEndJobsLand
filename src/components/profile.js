import React, { Component } from "react";
import axios from 'axios';
import MultiSelect from "@khanacademy/react-multi-select";

// handle button click of login form
async function getUserInformation() {
  try {
    const response = await axios.get('http://127.0.0.1:5002/job/user/information/' + localStorage.getItem('email'));
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

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
{label: '.Net', value: ".Net"},
{label: '3G', value: "3G"},
{label: 'ACH', value: "ACH"},
{label: 'AI', value: "AI"},
{label: 'AJAX', value: "AJAX"},
{label: 'Accounting', value: "Accounting"},
{label: 'Active Directory', value: "Active Directory"},
{label: 'Adobe InDesign', value: "Adobe InDesign"},
{label: 'Adobe Photoshop', value: "Adobe Photoshop"},
{label: 'Agriculture', value: "Agriculture"},
{label: 'Android', value: "Android"},
{label: 'Angular', value: "Angular"},
{label: 'Ant', value: "Ant"},
{label: 'Apache', value: "Apache"},
{label: 'Azure', value: "Azure"},
{label: 'BGP', value: "BGP"},
{label: 'Bootstrap', value: "Bootstrap"},
{label: 'Business Analysis', value: "Business Analysis"},
{label: 'C#', value: "C#"},
{label: 'C/C++', value: "C/C++"},
{label: 'CAD', value: "CAD"},
{label: 'CCNA', value: "CCNA"},
{label: 'CCNP', value: "CCNP"},
{label: 'CI', value: "CI"},
{label: 'CSS', value: "CSS"},
{label: 'Cassandra', value: "Cassandra"},
{label: 'CentOS', value: "CentOS"},
{label: 'Cisco Routers', value: "Cisco Routers"},
{label: 'CompTIA Network+', value: "CompTIA Network+"},
{label: 'Content Management Systems', value: "Content Management Systems"},
{label: 'Crystal Reports', value: "Crystal Reports"},
{label: 'DB2', value: "DB2"},
{label: 'DHCP', value: "DHCP"},
{label: 'DNS', value: "DNS"},
{label: 'Database Administration', value: "Database Administration"},
{label: 'Design Patterns', value: "Design Patterns"},
{label: 'Digital Marketing', value: "Digital Marketing"},
{label: 'Drupal', value: "Drupal"},
{label: 'E-Commerce', value: "E-Commerce"},
{label: 'Eclipse', value: "Eclipse"},
{label: 'Elasticsearch', value: "Elasticsearch"},
{label: 'Ember', value: "Ember"},
{label: 'Erlang', value: "Erlang"},
{label: 'Excel', value: "Excel"},
{label: 'FTP', value: "FTP"},
{label: 'Firewall', value: "Firewall"},
{label: 'GIS', value: "GIS"},
{label: 'Git', value: "Git"},
{label: 'Go', value: "Go"},
{label: 'Google Analytics', value: "Google Analytics"},
{label: 'HBase', value: "HBase"},
{label: 'HTML5', value: "HTML5"},
{label: 'HTTPS', value: "HTTPS"},
{label: 'Hadoop', value: "Hadoop"},
{label: 'Hibernate', value: "Hibernate"},
{label: 'IIS', value: "IIS"},
{label: 'ITIL', value: "ITIL"},
{label: 'IVR', value: "IVR"},
{label: 'JBoss', value: "JBoss"},
{label: 'JSON', value: "JSON"},
{label: 'Java', value: "Java"},
{label: 'JavaScript', value: "JavaScript"},
{label: 'Kanban', value: "Kanban"},
{label: 'Linux', value: "Linux"},
{label: 'Lucene', value: "Lucene"},
{label: 'MCITP', value: "MCITP"},
{label: 'MCSA', value: "MCSA"},
{label: 'MCSD', value: "MCSD"},
{label: 'MCSE', value: "MCSE"},
{label: 'Mac OS', value: "Mac OS"},
{label: 'Magento', value: "Magento"},
{label: 'Marketing', value: "Marketing"},
{label: 'Marketing Automation', value: "Marketing Automation"},
{label: 'Marketo', value: "Marketo"},
{label: 'Maven', value: "Maven"},
{label: 'Maya', value: "Maya"},
{label: 'Microsoft Access', value: "Microsoft Access"},
{label: 'Microsoft Office', value: "Microsoft Office"},
{label: 'Microsoft SQL Server', value: "Microsoft SQL Server"},
{label: 'Microsoft Windows Server', value: "Microsoft Windows Server"},
{label: 'MongoDB', value: "MongoDB"},
{label: 'MySQL', value: "MySQL"},
{label: 'NFS', value: "NFS"},
{label: 'Network', value: "Network"},
{label: 'Network Engineering', value: "Network Engineering"},
{label: 'NoSQL', value: "NoSQL"},
{label: 'Node.js', value: "Node.js"},
{label: 'OOP', value: "OOP"},
{label: 'OSPF', value: "OSPF"},
{label: 'Objective-C', value: "Objective-C"},
{label: 'Oracle', value: "Oracle"},
{label: 'PCI', value: "PCI"},
{label: 'PHP', value: "PHP"},
{label: 'PL/SQL', value: "PL/SQL"},
{label: 'Perforce', value: "Perforce"},
{label: 'Perl', value: "Perl"},
{label: 'PostGIS', value: "PostGIS"},
{label: 'PostgreSQL', value: "PostgreSQL"},
{label: 'PowerShell', value: "PowerShell"},
{label: 'Project Implementation', value: "Project Implementation"},
{label: 'Python', value: "Python"},
{label: 'R', value: "R"},
{label: 'REST', value: "REST"},
{label: 'RN', value: "RN"},
{label: 'React', value: "React"},
{label: 'Redis', value: "Redis"},
{label: 'Ruby', value: "Ruby"},
{label: 'S3', value: "S3"},
{label: 'SAP', value: "SAP"},
{label: 'SAS', value: "SAS"},
{label: 'SDLC', value: "SDLC"},
{label: 'SEO', value: "SEO"},
{label: 'SOAP', value: "SOAP"},
{label: 'SPSS', value: "SPSS"},
{label: 'SQL', value: "SQL"},
{label: 'SQLite', value: "SQLite"},
{label: 'SSH', value: "SSH"},
{label: 'SSL', value: "SSL"},
{label: 'SVN', value: "SVN"},
{label: 'SaaS', value: "SaaS"},
{label: 'Scala', value: "Scala"},
{label: 'Scripting', value: "Scripting"},
{label: 'Selenium', value: "Selenium"},
{label: 'Service-Oriented Architecture', value: "Service-Oriented Architecture"},
{label: 'SharePoint', value: "SharePoint"},
{label: 'Software Development', value: "Software Development"},
{label: 'Software Testing', value: "Software Testing"},
{label: 'Spring', value: "Spring"},
{label: 'Struts', value: "Struts"},
{label: 'Swift', value: "Swift"},
{label: 'Sybase', value: "Sybase"},
{label: 'System Administration', value: "System Administration"},
{label: 'T-SQL', value: "T-SQL"},
{label: 'TCP', value: "TCP"},
{label: 'TCP/IP', value: "TCP/IP"},
{label: 'TFS', value: "TFS"},
{label: 'Technical Support', value: "Technical Support"},
{label: 'Telecommunication', value: "Telecommunication"},
{label: 'Threading', value: "Threading"},
{label: 'Tomcat', value: "Tomcat"},
{label: 'Troubleshooting', value: "Troubleshooting"},
{label: 'UI', value: "UI"},
{label: 'UX', value: "UX"},
{label: 'Ubuntu', value: "Ubuntu"},
{label: 'Unit Testing', value: "Unit Testing"},
{label: 'VMWare', value: "VMWare"},
{label: 'Visio', value: "Visio"},
{label: 'Visual Basic', value: "Visual Basic"},
{label: 'Visual Studio', value: "Visual Studio"},
{label: 'Web Development', value: "Web Development"},
{label: 'WebSphere', value: "WebSphere"},
{label: 'Windows', value: "Windows"},
{label: 'WordPress', value: "WordPress"},
{label: 'XML', value: "XML"},
{label: 'XSLT', value: "XSLT"},
{label: 'Xero', value: "Xero"},
{label: 'iOS', value: "iOS"},
];

export default class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {data: [],fisrtname: '',lastname: '',email: '',password: '',sexe: 'male',age: 15,country: 'NC',telephone: '',errorMessage: '',selectedM: [],selectedS: []};
        
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
      
      componentDidMount =()=>{
        getUserInformation().then(response => {
              this.setState({
                data: response.data
              });
          });
        }


    render() {

    const {selectedM} = this.state;
    const {selectedS} = this.state;

// handle button click of login form
const handleUpdateUserInformation = () => {
  axios.get('http://localhost:5000/movie/user/update/' + localStorage.getItem('email'), {params : {fisrtname : this.state.fisrtname,lastname : this.state.lastname,email : this.state.email,password : this.state.password,sex : this.state.sex,age : this.state.age,country : this.state.country,telephone : this.state.telephone}})
  .then(function (response) {
    // setter
    //localStorage.setItem('token', response.data.token)
    //localStorage.setItem('email', response.data.email)
    //console.log(response.data)
    //window.location.replace("/panel/profile")
    //this.props.history.push('/panel')
  }).catch(function (error) {
    console.log('username or password is wrong !');
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
<div className="container-fluid">
    <div className="row p-4">
        <div className="col-md-8">
            <div className="card border-0 shadow">

              { this.state.errorMessage && <div class="alert alert-danger" role="alert">{ this.state.errorMessage }</div> }

                <div className="card-header border-0 bg-info text-light">update profile info</div>

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
                            <button type="submit" className="btn btn-outline-info" onClick={handleUpdateUserInformation}>Update</button>
                        </div>

                      </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="col-md-4 mt-5">
            <img src="/undraw_Profile_data_re_v81r.svg" className="w-100 mt-2 rounded" alt=""/>
        </div>

    </div>
</div>
        );
    }
}