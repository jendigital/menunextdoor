import React, { Component } from 'react';

import './index.css';
import '../onboarding.css';
import Validation from '../components/validation';

class WhyChief extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            checkRemote : false,
            checkPassionWork : false,
            checkShareLoveCooking : false,
            checkInsurance: false
        }
        this.checkRemote           = this.checkRemote.bind(this);
        this.checkPassionWork     = this.checkPassionWork.bind(this);
        this.checkShareLoveCooking = this.checkShareLoveCooking.bind(this);
        this.checkInsurance        = this.checkInsurance.bind(this);
    }
    
    checkRemote(e) {
       e.preventDefault();
       this.setState({checkRemote: !this.state.checkRemote})
    }

    checkPassionWork(e) {
        e.preventDefault();
        this.setState({checkPassionWork: !this.state.checkPassionWork})
    }

    checkShareLoveCooking(e) {
        e.preventDefault();
        this.setState({checkShareLoveCooking: !this.state.checkShareLoveCooking})
    }

    checkInsurance(e) {
        e.preventDefault();
        this.setState({checkInsurance: !this.state.checkInsurance})
    }

    render() {
        return (
            <div className='on-boarding'>
                <div className='header on-boarding-header'>
                    <h4>
                        Pourquoi devenir chef sur menu next door ?
                    </h4>
                    <h6>
                        Cochez chacune des cards pour montrer que vous avez compris.
                    </h6>
                </div>
                <div className='content on-boarding-content'>
                    <div className={'card on-boarding-card ' + (this.state.checkRemote ? 'activate-card' : 'default-card')} onClick={this.checkRemote} >
                        <div>
                            <span className="principal-icon icon-home" />
                        </div>
                        <div>
                            Travaillez depuis chez vous
                        </div>
                        <div>
                            <span className="advantage-icon icon-logo-plus" />
                        </div>
                    </div>
                    <div className={'card on-boarding-card ' + (this.state.checkPassionWork ? 'activate-card' : 'default-card')} onClick={this.checkPassionWork} >
                        <div>
                            <span className="principal-icon icon-euro-sign" />
                        </div>
                        <div>
                            <p> Gagnez de l'argent </p>
                            <p> grâce à votre passion </p>
                        </div>
                        <div>
                            <span className="advantage-icon icon-logo-plus" />
                        </div>
                    </div>
                    <div className={'card on-boarding-card ' + (this.state.checkShareLoveCooking ? 'activate-card' : 'default-card')} onClick={this.checkShareLoveCooking} >
                        <div>
                            <span className="principal-icon icon-heart" />
                        </div>
                        <div>
                            <p> Partagez votre </p>
                            <p> plaisir de cuisiner </p>
                        </div>
                        <div>
                            <span className="advantage-icon icon-logo-plus" />
                        </div>
                    </div>
                    <div className={'card on-boarding-card ' + (this.state.checkInsurance ? 'activate-card' : 'default-card')} onClick={this.checkInsurance} >
                        <div>
                            <span className="principal-icon icon-insurance" />
                        </div>
                        <div>
                            <p> Simplement sécurisé grâce </p>
                            <p> à une assurance </p>
                            <p> dans la restauration </p>
                        </div>
                        <div>
                            <span className="advantage-icon icon-logo-plus" />
                        </div>
                    </div>
                </div>
                <Validation step={'whychief'} active={this.state.checkRemote && this.state.checkPassionWork && this.state.checkShareLoveCooking && this.state.checkInsurance} history={this.props.history} />
            </div>
        )
    }
}

export default WhyChief;
