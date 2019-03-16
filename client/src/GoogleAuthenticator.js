import React, { Component } from 'react';
import * as api from './api';

class GoogleAuthenticator extends Component {

    constructor (props) {
        super(props);

        this.state = {
            url: null
        }

        this.handleAuth = this.handleAuth.bind(this);
    }

    componentDidMount() {
        api.getAuthenticateURL()
        .then((data) => {
            this.setState( {
                url: data
            })
        })
        .catch((err) => console.log(err));
            
    }

    handleAuth () {
        window.open(this.state.url, "_blank");
    }
    
    render() {
        return (
            <div>
                <button disabled={ this.state.url ? false : true} 
                onClick={ this.handleAuth }>Authenticate</button>
            </div>
        )
    }
}

export default GoogleAuthenticator;