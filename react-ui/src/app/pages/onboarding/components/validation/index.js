import React, { Component } from 'react';

import './index.css';

class Validation extends Component {
    constructor(props) {
        super(props)

        this.greatUnderstood = this.greatUnderstood.bind(this);
    }

    greatUnderstood() {
        if(this.props.active && this.props.step === 'whychief') {
            this.props.history.push('/values');
        } else if(this.props.active && this.props.step === 'values') {
            this.props.history.push('/howitworks');
        }
    }

    render() {
        return (
            <div className='validation on-boarding-validation'>
                <button className={this.props.active ? 'active' : 'inactive'} onClick={this.greatUnderstood}> Genial j'ai compris </button>
            </div>
        )
    }
}

export default Validation;
