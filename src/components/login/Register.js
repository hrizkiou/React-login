import React, { Component } from "react";
// import Config from "../../config";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            firstname: "",
            lastname: "",
            password: ""
        };

        // required to call function with 'this'
        this.sendForm = this.sendForm.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    sendForm(e) {

        console.log(this.state)
        e.preventDefault();
        // fetch(`${Config.host}:${Config.ports.server}/sign/up`, {
        //     method: "POST",
        //     headers:{
        //         "Content-Type": "application/json"
        //     },
        //     credentials: "include",
        //     body: JSON.stringify(this.state)
        // }).then(response => {
        //     return response.json();
        // }).then(json => {
        //     if (json.status === 200) {
        //         this.props.history.push("/sign/in");
        //         message("success", "You registered successfuly")
        //     }
        //     else
        //         message("error", json.message);
        // });

    }

    updateValue(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <div className="container">
                <div className="row py-5 mt-4 align-items-center">
                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img
                            src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
                            alt=""
                            className="img-fluid mb-3 d-md-block"
                        />
                    </div>
                    {/* Registration Form */}
                    <div className="col-md-7 col-lg-6 ml-auto">
                        <form action="#">
                            <div className="row">
                                {/* First Name */}
                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                                    </div>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstname"
                                        placeholder="First Name"
                                        className="form-control bg-white border-left-0 border-md"
                                        onChange={ this.updateValue }
                                        autoComplete="on"
                                    />
                                </div>
                                {/* Last Name */}
                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                                    </div>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastname"
                                        placeholder="Last Name"
                                        className="form-control bg-white border-left-0 border-md"
                                        onChange={ this.updateValue }
                                        autoComplete="on"
                                    />
                                </div>
                                {/* Email Address */}
                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted" />
                    </span>
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="form-control bg-white border-left-0 border-md"
                                        onChange={ this.updateValue }
                                        autoComplete="on"
                                    />
                                </div>
                                {/* Username Address */}
                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted" />
                    </span>
                                    </div>
                                    <input
                                        id="username"
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        className="form-control bg-white border-left-0 border-md"
                                        onChange={ this.updateValue }
                                        autoComplete="on"
                                    />
                                </div>
                                {/* Password */}
                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                                    </div>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control bg-white border-left-0 border-md"
                                        onChange={ this.updateValue }
                                        autoComplete="on"
                                    />
                                </div>
                                {/* Submit Button */}
                                <div className="form-group col-lg-12 mx-auto mb-0">
                                    <button className="btn btn-primary btn-block py-2" onClick={this.sendForm} variant="outline-dark">Create your account</button>
                                </div>

                                {/* Divider Text */}
                                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                    <div className="border-bottom w-100 ml-5" />
                                    <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                    <div className="border-bottom w-100 mr-5" />
                                </div>
                                {/* Already Registered */}
                                <div className="text-center w-100">
                                    <p className="text-muted font-weight-bold">
                                        Already Registered?{" "}
                                        <a href="/login" className="text-primary ml-2">
                                            Login
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
