import React, { Component } from 'react';

export default class Validation extends Component {
    constructor(state) {
        this._state = state;
    }

    handleSubmit = evt => {
        evt.preventDefault();
    };

    handleChange = evt => {
        const fieldErrors = {
          ...this._state.fieldErrors,
          [evt.target.name]: ""
        };
    
        this.setState({ fieldErrors });
    };

    handleInvalid = evt => {
        evt.preventDefault();
        const fieldErrors = {
          ...this._state.fieldErrors,
          [evt.target.name]: evt.target.validationMessage,
        };
    
        this.setState({ fieldErrors });
    };
    return ();
}