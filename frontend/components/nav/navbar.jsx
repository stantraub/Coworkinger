import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
 
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
            <div className='action-buttons-wrapper'>
                <div className='action-item'>
                        <span><Link style={{ textDecoration: 'none', color: 'black' }} to={"/reviews"}>All Reviews</Link></span>
                </div>
                <div className='action-item'>
                        <span><Link style={{ textDecoration: 'none', color: 'black' }} to={"/profile"}>Profile</Link></span>
                </div>
                <div className='action-item'>
                        <span><Link style={{ textDecoration: 'none', color: 'black' }} to={"/new_review"}>Write a Review</Link></span>
                </div>
                <button className='signup-button' onClick={this.logoutUser}>Logout</button>
            </div>
            );
        } else {
            return (
                <div className="action-buttons-wrapper">
                    <div className='action-item'>
                        <span>List a workspace</span>
                    </div>
                    <div className='action-item'>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/spaces'}><span>Find a workspace</span></Link>
                    </div>
                    <div className='action-item'>
                        <span>Write a Review</span>
                    </div>
                    <div className='action-item'>
                        <span onClick={() => this.props.openModal('login')}>Sign In</span>
                    </div>
                    <div className='action-item'>
                        <button onClick={() => this.props.openModal('signup')} className='signup-button'>
                            Signup
                        </button>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div className='main-nav'>
                <span><Link to="/" className='main-logo'>Coworking</Link></span>
                { this.getLinks() }
            </div>
        );
    }
}

export default Navbar;
