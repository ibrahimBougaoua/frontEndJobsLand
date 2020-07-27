import React, { Component } from "react";
import axios from 'axios';

// handle button click of login form
async function getUserInformation() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/user/information/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {user: [],fisrtname: '',lastname: '',email: '',password: '',sex: '',age: '',country: '',telephone: '',};
    
        this.handleChangeFisrtname = this.handleChangeFisrtname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeSex = this.handleChangeSex.bind(this);
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

      handleChangeSex(event) {
        this.setState({sex: event.target.options[event.target.selectedIndex].text});
      }

      handleChangeAge(event) {
        this.setState({age: event.target.options[event.target.selectedIndex].text});
      }

      handleChangeCountry(event) {
        this.setState({country: event.target.options[event.target.selectedIndex].text});
      }

      handleChangeTelephone(event) {
        this.setState({telephone: event.target.value});
      }

      handleSubmit(event) {
        alert(this.state.password + this.state.email);
        event.preventDefault();
      }


render() {

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

return (
    <div className="container mt-2 mb-5 mt-5">
        <div className="row">
            <div className="col-md-5 mt-5">
                <div className="card border-0 shadow">
                <div className="card-header border-0 bg-primary text-white">Profile</div>

                <div className="card-body">
                    <form method="POST" onSubmit={this.handleSubmit}>

                        <div className="form-group row">
                            <label for="name" className="col-md-4 col-form-label text-md-right">Firstname</label>
                            <div className="col-md-8">
                                <input id="name" type="text" onChange={this.handleChangeFisrtname} className="form-control" name="name" value={this.state.fisrtname} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="name" className="col-md-4 col-form-label text-md-right">Lastname</label>
                            <div className="col-md-8">
                                <input id="name" type="text" onChange={this.handleChangeLastname} className="form-control" name="name" value={this.state.lastname} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                            <div className="col-md-8">
                                <input id="email" type="email" onChange={this.handleChangeEmail} className="form-control" name="email" value={this.state.email} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                            <div className="col-md-8">
                                <input id="password" type="password" onChange={this.handleChangePassword} className="form-control" name="password" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="name" className="col-md-4 col-form-label text-md-right">Sex</label>
                            <div className="col-md-8">
                            <select name="sex" class="form-control" value={this.state.sex} onChange={this.handleChangeSex}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="name" className="col-md-4 col-form-label text-md-right">Age</label>
                            <div className="col-md-8">
                            <select name="age" class="form-control" value={this.state.age} onChange={this.handleChangeAge}>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="name" className="col-md-4 col-form-label text-md-right">Country</label>
                            <div className="col-md-8">
                            <select name="country" class="form-control" value={this.state.country} onChange={this.handleChangeCountry}>
                                <option value="alger">alger</option>
                                <option value="moroco">moroco</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="name" className="col-md-4 col-form-label text-md-right">Telephone</label>
                            <div className="col-md-8">
                                <input id="name" type="text" onChange={this.handleChangeTelephone} className="form-control" name="telephone" value={this.state.telephone} />
                            </div>
                        </div>
                        <div className="form-group row mb-0">
                            <div className="col-md-8 offset-md-4">
                                <button type="submit" className="btn btn-primary" onClick={handleUpdateUserInformation}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="col-md-7 mt-5">
            <img src="https://38jr5u32lye82j9kce2xsl7a-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/Footer-man.svg" className="w-100 mt-2 rounded" alt=""/>
        </div>

    </div>
</div>
);
}
}