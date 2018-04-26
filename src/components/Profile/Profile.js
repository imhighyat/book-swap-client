import React from 'react';
import { connect } from 'react-redux';
import { editProfile, cancelEdit, updateUser, fetchUser } from './../../actions/profileTabActions';

export class Profile extends React.Component{
	componentDidMount(){
		this.props.dispatch(fetchUser());
	}

	handleEdit(e, target){
		e.preventDefault();
		this.props.dispatch(editProfile(target));
	}

	handleCancel(e){
		e.preventDefault();
		this.props.dispatch(cancelEdit());
	}

	handleSave(e, target){
		e.preventDefault();
		if(target === 'address' && (this.refs.street.value || this.refs.city.value || this.refs.state.value || this.refs.zip.value)){
			this.props.dispatch(updateUser(target,
				{
	                street: this.refs.street.value,
	                city: this.refs.city.value,
	                state: this.refs.state.value,
	                zip: this.refs.zip.value
	            }
			));
		}
		else{
            const value = this.refs[target].value;
            if(value){
                this.props.dispatch(updateUser(target, value));
            }
        }
	}

	render(){
		return(
	        <div className='profile'>
	        	<div className='name'>
                    <h4>Name: </h4>
                    <p>{this.props.user.name}</p> 
                </div>
                <div className='email'>
                    <h4>Email Address: </h4>
                    { this.props.editing !== 'email' && <p>{this.props.user.email}</p> }
                    { this.props.editing === 'email' && <input defaultValue={this.props.user.email} ref='email' /> }
                    { this.props.editing !== 'email' && 
                    	<button onClick={ e => this.handleEdit(e, 'email') }>
                    		<i className="fas fa-edit"></i></button> }
                    { this.props.editing === 'email' && 
                    	<button onClick={ e=> this.handleCancel(e) }>
                    		<i className="far fa-times-circle"></i></button> }
                    { this.props.editing === 'email' &&
                    	<button onClick={ e=> this.handleSave(e, 'email') }>
                    		<i className="far fa-check-circle"></i></button> }
                </div>
                <div className='phone'>
                    <h4>Phone Number: </h4>
                    { this.props.editing !== 'phone' && <p>{this.props.user.phoneNumber}</p> }
                    { this.props.editing === 'phone' && <input defaultValue={this.props.user.phoneNumber} ref='phoneNumber' /> }
                    { this.props.editing !== 'phone' && 
                    	<button onClick={ e => this.handleEdit(e, 'phone') }>
                    		<i className="fas fa-edit"></i></button> }
                    { this.props.editing === 'phone' && 
                    	<button onClick={ e=> this.handleCancel(e) }>
                    		<i className="far fa-times-circle"></i></button> }
                    { this.props.editing === 'phone' &&
                    	<button onClick={ e=> this.handleSave(e, 'phoneNumber') }>
                    		<i className="far fa-check-circle"></i></button> }
                </div>
                <div className='address'>
                    <h4>Shipping Address: </h4>
                    { this.props.editing !== 'address' && <p>{this.props.user.address.street}</p> }
                    { this.props.editing === 'address' && <input defaultValue={this.props.user.address.street} ref='street' /> }
                    { this.props.editing !== 'address' && <p>{this.props.user.address.city}</p> }
                    { this.props.editing === 'address' && <input defaultValue={this.props.user.address.city} ref='city' /> }
                    { this.props.editing !== 'address' && <p>{this.props.user.address.state}</p> }
                    { this.props.editing === 'address' && <input defaultValue={this.props.user.address.state} ref='state' /> }
                    { this.props.editing !== 'address' && <p>{this.props.user.address.zip}</p> }
                    { this.props.editing === 'address' && <input defaultValue={this.props.user.address.zip} ref='zip' /> }
                    { this.props.editing !== 'address' && 
                    	<button onClick={ e => this.handleEdit(e, 'address') }>
                    		<i className="fas fa-edit"></i></button> }
                    { this.props.editing === 'address' && 
                    	<button onClick={ e=> this.handleCancel(e) }>
                    		<i className="far fa-times-circle"></i></button> }
                    { this.props.editing === 'address' &&
                    	<button onClick={ e=> this.handleSave(e, 'address') }>
                    		<i className="far fa-check-circle"></i></button> }
                </div>
                <div className='username'>
                    <h4>Username: </h4>
                    <p >{this.props.user.username}</p>
                </div>
                <div className='password'>
                    <h4>Password: </h4>
                    { this.props.editing !== 'password' && <p>{this.props.user.password}</p> }
                    { this.props.editing === 'password' && <input defaultValue={this.props.user.password} ref='password' /> }
                    { this.props.editing !== 'password' && 
                    	<button onClick={ e => this.handleEdit(e, 'password') }>
                    		<i className="fas fa-edit"></i></button> }
                    { this.props.editing === 'password' && 
                    	<button onClick={ e=> this.handleCancel(e) }>
                    		<i className="far fa-times-circle"></i></button> }
                    { this.props.editing === 'password' &&
                    	<button onClick={ e=> this.handleSave(e, 'password') }>
                    		<i className="far fa-check-circle"></i></button> }
                </div>
	        </div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.userProfileReducer.profileInfo,
	editing: state.userProfileReducer.editing
});

export default connect(mapStateToProps)(Profile);