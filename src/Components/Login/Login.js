import React, { Component } from 'react';
import { FormInput } from '../SharedServices/Generics/InputElement';
import { ServiceUrl } from '../SharedServices/Constant/ServicesUrl';
import { Services } from '../SharedServices/Services';
import { Label, NavLink } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";



export class Login extends Component {
  state = {
    user: {
      username: "",
      password: ""
    },
    errors: {},
    submitted: false
  };

  handleChange = event => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  onSubmit(e) {
    e.preventDefault();

    //const { username, password } = this.state;
    //const { history } = this.props;

    //this.setState({ error: false });

    // if (!(username === 'george' && password === 'foreman')) {
    //   return this.setState({ error: true });
    // }

    //store.set('loggedIn', true);
    //history.push('/Home');
  }

  render() {
    const { submitted, errors, user: { username, password } } = this.state;
    return (
      <div className="Container">
        <React.Fragment>

          <div className="row">
            <div className="col-sm-12">
              <label>Username or Email address</label>
            </div>
            <div className="col-sm-12">
              <FormInput
                label="Username"
                name="username"
                type="text"
                value={username}
                onChange={this.handleChange}
                error={errors.username}
                required
                className="col-sm-12"

              />
            </div>

            <div className="col-sm-12">
              <label>Password</label>
            </div>
            <div className="col-sm-12">
              <FormInput
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
                error={errors.password}
                required
                className="col-sm-12"
              />
            </div>

            <div className="col-sm-2" id="rememberMeCheckboxDiv">
              <input id="rememberMeCheckbox"
                className="checkbox"
                type="checkbox"
              />
              <label>  Remember me</label>
            </div>
            <div className="col-sm-12">
              <div className="col-sm-2">
                {/* <button type="button">Log In</button> </div> */}
                <NavLink tag={Link} to="./Home" className="btn btn-info">Log In</NavLink>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
