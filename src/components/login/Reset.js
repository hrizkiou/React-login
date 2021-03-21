import React, {Component} from 'react';

export default class Reset extends Component {

    render() {
        return (
            <div className="container">
                <div className="row py-5 mt-4 align-items-center">
                    {/* For Demo Purpose */}
                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt=""
                             className="img-fluid mb-3 d-md-block"/>
                        <h1></h1>

                    </div>
                    {/* Registeration Form */}
                    <div className="col-md-7 col-lg-6 ml-auto">
                        <form action="#">
                            <div className="row">
                                {/* Email Address */}
                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted"/>
                    </span>
                                    </div>
                                    <input id="email" type="email" name="email" placeholder="Email Address"
                                           className="form-control bg-white border-left-0 border-md"/>
                                </div>
                                {/* Submit Button */}
                                <div className="form-group col-lg-12 mx-auto mb-0">
                                    <a href="#" className="btn btn-primary btn-block py-2">
                                        <span className="font-weight-bold">Login</span>
                                    </a>
                                </div>
                                {/* Divider Text */}
                                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                    <div className="border-bottom w-100 ml-5"/>
                                    <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                    <div className="border-bottom w-100 mr-5"/>
                                </div>
                                {/* Already Registered */}
                                <div className="text-center w-100">
                                    <p className="text-muted font-weight-bold">Already Registred? <a href=""
                                                                                                         className="text-primary ml-2">Login</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}