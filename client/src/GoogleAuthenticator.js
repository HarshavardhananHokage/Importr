import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as api from './api';
import * as actions from './redux/action';

class GoogleAuthenticator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            url: null
        }

        this.handleAuth = this.handleAuth.bind(this);
    }

    componentDidMount() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let status = params.get('status');
        if (status === "success") {
            this.props.updateAuthentication();
        }

        if(!this.props.isAuthenticated) {
            api.getAuthenticateURL()
            .then((data) => {
                this.setState({
                    url: data
                })
            })
            .catch((err) => console.log(err));
        }
    }

    handleAuth() {
        window.location = this.state.url;
    }

    render() {
        return (
            <div>
                <button disabled={this.props.isAuthenticated}
                    onClick={this.handleAuth}>{this.props.isAuthenticated ? "Authenticated" : "Authenticate" }</button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

function mapDispatchToProps (dispatch) {
    return {
        updateAuthentication: () => dispatch( actions.authWithGoogle() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuthenticator);