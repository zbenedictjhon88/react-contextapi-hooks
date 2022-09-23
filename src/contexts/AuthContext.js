import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }

    auth = () => {
        this.setState({isAuthenticated: !this.state.isAuthenticated});
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state,  auth: this.auth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;