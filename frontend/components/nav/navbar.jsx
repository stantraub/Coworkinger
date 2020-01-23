import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
 //
    }

    render() {
        return (
            <div className='main-nav'>
                <span><Link to="/" className='main-logo'>Coworking</Link></span>
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
                </div>
            </div>
        );
    }
}

export default Navbar;
