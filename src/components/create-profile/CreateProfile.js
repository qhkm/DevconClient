import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

class CreateProfile extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	displaySocialInputs: false,
	  	handle: '',
	  	company: '',
	  	website: '',
	  	location: '',
	  	status: '',
	  	skills: '',
	  	githubusername: '',
	  	bio: '',
	  	twitter: '',
	  	facebook: '',
	  	linkedin: '',
	  	youtube: '',
	  	instagram: '',
	  	errors: {}
	  };

	  this.onChange=this.onChange.bind(this);
	  this.onSubmit=this.onChange.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		console.log('submit');
	}

	onChange(e) {
		this.setState({[e.target.name] : e.target.value });

	}
		render(){

		const { errors, displaySocialInputs} = this.state;

		let socialInputs;

		if(displaySocialInputs){
			socialInputs = (
				<div>
					<InputGroup placeholder="Twitter Profile url" 
						name="twitter"
						icon="fab fa-twitter"
						value={this.state.twitter}
						onChange={this.onChange}
						error={errors.twitter} 
					/>

					<InputGroup placeholder="Facebook Profile url" 
						name="facebook"
						icon="fab fa-facebook"
						value={this.state.facebook}
						onChange={this.onChange}
						error={errors.facebook} 
					/>

					<InputGroup placeholder="Linkedin Profile url" 
						name="Linkedin"
						icon="fab fa-linkedin"
						value={this.state.linkedin}
						onChange={this.onChange}
						error={errors.linkedin} 
					/> 

					<InputGroup placeholder="Youtube Profile url" 
						name="Youtube"
						icon="fab fa-youtube"
						value={this.state.youtube}
						onChange={this.onChange}
						error={errors.youtube} 
					/> 

					<InputGroup placeholder="Instagram Profile url" 
						name="Instagram"
						icon="fab fa-instagram"
						value={this.state.instagram}
						onChange={this.onChange}
						error={errors.instagram} 
					/> 

				</div>
				)
		}

		const options = [ 
		{ label: "* Select Professional Status", value: 0},
		{ label: "Developer", value:'Developer'},
		{ label: "Junior Developer", value:'Junior Developer'},
		{ label: "Senior Developer", value:'Senior Developer'},
		{ label: "Manager", value:'Manager'},
		{ label: "Student or Learning", value:'Student or Learning'},
		{ label: "Instructor or teacher", value:'Instructor or teacher'},
		{ label: "Intern", value:'Intern'},
		{ label: "Other", value:'Other'},
		{ label: "Student or Learning", value:'Student or Learning'}
		]
		return (
			<div className="create-profile">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<div className="display-4 text-center">Create Your Profile</div>
							<p className="lead text-center">
								Lets get some information to make your profile stand out
							</p>
							<small className="d-block pb-3"> * = required filed</small>
							<form onSubmit={this.onSubmit}>
								<TextFieldGroup 
									placeholder=" Profile handle"
									name="handle"
									value={this.state.handle}
									onChange={this.onChange}
									error={errors.handle}
									info="A unique handle for your profile"
								/>

								<SelectListGroup 
									placeholder="Status"
									name="status"
									value={this.state.status}
									onChange={this.onChange}
									options={options}
									error={errors.status}
									info="Give us your idea of where you are at in your career"
								/>

								<TextFieldGroup 
									placeholder="Company"name="company"
									value={this.state.company}
									onChange={this.onChange}
									error={errors.company}
									info="Could be your own company or one you work for"
								/>

								<TextFieldGroup 
									placeholder="website"
									name="website"
									value={this.state.website}
									onChange={this.onChange}
									error={errors.website}
									info="Could be your own company or one you work for"
								/>

								<TextFieldGroup 
									placeholder="location"
									name="location"
									value={this.state.location}
									onChange={this.onChange}
									error={errors.location}
									info="Could be your own company or one you work for"
								/>

								<TextFieldGroup 
									placeholder="skills"
									name="skills"
									value={this.state.skills}
									onChange={this.onChange}
									error={errors.skills}
									info="Could be your own company or one you work for"
								/>

								<TextAreaFieldGroup 
									placeholder="Short bio"
									name="bio"
									value={this.state.bio}
									onChange={this.onChange}
									error={errors.bio}
									info="Could be your own company or one you work for"
								/>

								<div className="mb-3">
									<button type="button" onClick={() => { 
										this.setState(prevState => ({
										displaySocialInputs: !prevState.displaySocialInputs 
										})); 
									}} 
									className="btn btn-light">
									 Add Social Network Links
									</button>
									<span className="text-muted">Optional</span>
								</div>
								{socialInputs}
								<input type="submit" value="Submit" className="btn btn-info btn-block mt-4 mb-4" />


							</form>
						</div>
					</div>
				</div>		  
			</div>
		);
	}
}

CreateProfile.propTypes = {
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(
	mapStateToProps
)(CreateProfile);
