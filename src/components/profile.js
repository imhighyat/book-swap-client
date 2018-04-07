import React from 'react';
import {connect} from 'react-redux';
import {editInfo, cancelEdit} from '../actions';

export class Profile extends React.Component{
    onChange(input){
        console.log(input);
    }

    onEdit(e, info){
        e.preventDefault();
        this.props.dispatch(editInfo(info));
    }

    onCancelEdit(e){
        e.preventDefault();
        this.props.dispatch(cancelEdit());
    }

    render(){
        return (
            <div className='profile'>
                <div className='name'>
                    <h4>Name: </h4>
                    <p>{this.props.user.name}</p> 
                </div>
                <div className='email'>
                    <h4>Email Address: </h4>
                    <p contentEditable={this.props.editing === 'email' ? 'true':'false'}>{this.props.user.email}</p>
                    <a href='#' onClick={e=> this.onEdit(e, 'email')}><i className="fas fa-edit"></i></a>
                    <a href='#' onClick={e=> this.onCancelEdit(e)}><i className="far fa-times-circle"></i></a>
                    <a href='#'><i className="far fa-check-circle"></i></a>
                </div>
                <div className='phone'>
                    <h4>Phone Number: </h4>
                    <p contentEditable={this.props.editing === 'phone' ? 'true':'false'}>{this.props.user.phone}</p>
                    <a href='#' onClick={e=> this.onEdit(e, 'phone')}><i className="fas fa-edit"></i></a>
                    <a href='#' onClick={e=> this.onCancelEdit(e)}><i className="far fa-times-circle"></i></a>
                    <a href='#'><i className="far fa-check-circle"></i></a>
                </div>
                <div className='address'>
                    <h4>Shipping Address: </h4>
                    <p contentEditable={this.props.editing === 'address' ? 'true':'false'}>{this.props.user.address.street}</p>
                    <p contentEditable={this.props.editing === 'address' ? 'true':'false'}>{this.props.user.address.city}</p>
                    <p contentEditable={this.props.editing === 'address' ? 'true':'false'}>{this.props.user.address.state}</p>
                    <p contentEditable={this.props.editing === 'address' ? 'true':'false'}>{this.props.user.address.zip}</p>
                    <a href='#' onClick={e=> this.onEdit(e, 'address')}><i className="fas fa-edit"></i></a>
                    <a href='#' onClick={e=> this.onCancelEdit(e)}><i className="far fa-times-circle"></i></a>
                    <a href='#'><i className="far fa-check-circle"></i></a>
                </div>
                <div className='username'>
                    <h4>Username: </h4>
                    <p >{this.props.user.username}</p>
                </div>
                <div className='password'>
                    <h4>Password: </h4>
                    <p contentEditable={this.props.editing === 'password' ? 'true':'false'}>{this.props.user.password}</p>
                    <a href='#' onClick={e=> this.onEdit(e, 'password')}><i className="fas fa-edit"></i></a>
                    <a href='#' onClick={e=> this.onCancelEdit(e)}><i className="far fa-times-circle"></i></a>
                    <a href='#'><i className="far fa-check-circle"></i></a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.userInfo,
    editing: state.editing
});

export default connect(mapStateToProps)(Profile);