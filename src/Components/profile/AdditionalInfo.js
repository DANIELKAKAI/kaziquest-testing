import React, { Component } from 'react';


export default class AdditionalInfo extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
    
          categories: props.categories,
          job_types: props.job_types,
          language:'',
          coverletter:'',
          resume:'',
          proficiency:'',
          interest:'',
          professional:'',
          relocate:'yes'


        }

         this.handleChange = this.handleChange.bind(this);
    
    this.saveInfo = this.saveInfo.bind(this);
        
        this.clearForm = this.clearForm.bind(this);


    }

    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value });

    }



    saveInfo(){

        console.log(this.state);

        if(this.state.language && this.state.coverletter && this.state.resume && this.state.proficiency && this.state.interest && this.state.professional && this.state.relocate)
        {
            console.log(this.state);
        }
        else{
            alert("fill all fields")
        }
    }

    clearForm(){
        this.setState({
            language:'',
            coverletter:'',
            resume:'',
            proficiency:'',
            interest:'',
            professional:'',
            relocate:''
        });
    }


    render() {


        const job_types = this.state.job_types.map((data) =>

            <option value={data}>{data}</option>

        );

        const categories = this.state.categories.map((data) =>
            <option value={data}>{data}</option>
        );

        return (

            <div>

                <h2>Additional Information</h2>
                <div className="row form-group">
                    <div className="col-md-12"><h4>Cover letter</h4></div>
                    <div className="col-md-12 mb-3 mb-md-0">
                        <textarea name="coverletter" onChange={this.handleChange} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h4>Upload resume</h4>
                        <input type="file" onChange={this.handleChange} name="resume" placeholder="Upload resume" />
                    </div>

                    <div className="col-md-12 mb-3 mb-md-0">
                        <h4>Languages</h4>
                        <div className="row form-group">
                            <div className="col-md-4 mb-3 mb-md-0">
                                <label className="font-weight-bold" for="fullname">Languages</label>
                                <select onChange={this.handleChange} name="language"  className="form-control">
                                    <option value="">Languages</option>
                                    <option value="English">English</option>
                                    <option value="French">French</option>
                                    <option value="Swahili">Swahili</option>
                                    <option value="German">German</option>

                                </select>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0">
                                <label className="font-weight-bold" for="fullname">Proficiency</label>
                                <select name="proficiency" onChange={this.handleChange}  className="form-control">
                                    <option value="">Choose</option>
                                    <option value="Basic knowledge">Basic knowledge</option>
                                    <option value="Good knowledge">Good knowledge</option>
                                    <option value="Fluent">Fluent</option>
                                    <option value="First language">First language</option>

                                </select>
                            </div>
                        </div>
                    </div>


                </div>

                <h4>My Interests</h4>
                <div className="row form-group">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <label className="font-weight-bold" for="fullname">Im interested in</label>
                        <select name="interest" onChange={this.handleChange} className="form-control">
                            <option value="">Choose</option>
                            {categories}

                        </select>

                        <label className="font-weight-bold" for="fullname">My professional level</label>
                        <select name="professional" onChange={this.handleChange} className="form-control">
                            <option value="">Choose</option>
                            {job_types}

                        </select>

                        <label className="font-weight-bold" for="fullname">I'm willing to relocate</label>
                        <select name="relocate" onChange={this.handleChange} className="form-control">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <button onClick={this.saveInfo} className="btn btn-primary  py-2 px-5 float-left">Save</button>
                    <button onClick={this.clearForm} className="btn btn-danger  py-2 px-5 float-right">Cancel</button>
                  </div>
                </div>
            </div>


        );
    }
}
