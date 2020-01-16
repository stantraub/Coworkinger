import React from 'react';
import { withRouter } from 'react-router-dom';
import './session_modal.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/reviews');
        }

        this.setState({ errors: nextProps.errors})
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user).then(this.props.closeModal);
    }

    // renderErrors() {
    //     return (
    //       <ul>
    //         {Object.keys(this.state.errors).map((error, i) => (
    //           <li key={`error-${i}`}>{this.state.errors[error]}</li>
    //         ))}
    //       </ul>
    //     );
    // }

    render() {
        return (
          <div className="session-container">
            <h1 className="session-header">Sign in to your account</h1>
            <form onSubmit={this.handleSubmit} className="session-form">
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email Address"
                className="session-input"
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="session-input"
              />
              <br />
              <input 
                  type="submit"
                  value="Sign In"
                  className="session-submit"
              />
            </form>
            <br />
            <span>Forgot your password?</span>
            <br />
            <span>Create an account</span>
          </div>
        );
    }
}

export default withRouter(LoginForm);