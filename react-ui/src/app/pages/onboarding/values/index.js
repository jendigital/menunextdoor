import React, { Component } from 'react';

import './index.css';
import Validation from '../components/validation';

class Values extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            checkFreshFood : false,
            checkPassionCook : false,
            checkCitySocialisation : false,
            checkAffordablePrice: false
        }
        this.checkFreshFood         = this.checkFreshFood.bind(this);
        this.checkPassionCook       = this.checkPassionCook.bind(this);
        this.checkCitySocialisation = this.checkCitySocialisation.bind(this);
        this.checkAffordablePrice   = this.checkAffordablePrice.bind(this);
    }

    checkFreshFood(e) {
        e.preventDefault();
        this.setState({checkFreshFood: !this.state.checkFreshFood})
    }
 
    checkPassionCook(e) {
        e.preventDefault();
        this.setState({checkPassionCook: !this.state.checkPassionCook})
    }
 
    checkCitySocialisation(e) {
        e.preventDefault();
         this.setState({checkCitySocialisation: !this.state.checkCitySocialisation})
    }
 
    checkAffordablePrice(e) {
        e.preventDefault();
        this.setState({checkAffordablePrice: !this.state.checkAffordablePrice})
    }

    render() {
        return (
            <div className='on-boarding'>
                <div className='header on-boarding-header'>
                    <h3>
                        Les engagements du chef menu next door
                    </h3>

                    <h5>
                        J'appartient à la communauté Menu Next Door si je défends les valeurs suivantes:
                        Cochez chacune des cards pour adhérer aux valeurs de la communauté.
                    </h5>
                </div>
                <div className='content on-boarding-content'>
                    <div className={'card on-boarding-card ' + (this.state.checkFreshFood ? 'activate-card' : 'default-card')} onClick={this.checkFreshFood} >
                        <div>
                            <span className="principal-icon icon-home" />
                        </div>
                        <div>
                            Produit frais, biologique ou locaux respectueux de notre planète et de notre santé.
                        </div>
                        <div>
                            <span className="advantage-icon icon-logo-plus" />
                        </div>
                    </div>
                    <div className={'card on-boarding-card ' + (this.state.checkPassionCook ? 'activate-card' : 'default-card')} onClick={this.checkPassionCook} >
                        <div>
                            <span className="principal-icon icon-euro-sign" />
                        </div>
                        <div>
                            <p> Cuisiné avec amour </p>
                        </div>
                        <div>
                            <span className="advantage-icon icon-logo-plus" />
                        </div>
                    </div>
                    <div className={'card on-boarding-card ' + (this.state.checkCitySocialisation ? 'activate-card' : 'default-card')} onClick={this.checkCitySocialisation} >
                        <div>
                            <span className="principal-icon icon-heart" />
                        </div>
                        <div>
                            <p> Créer du lien social avec les habitants </p>
                            <p> de votre quartier et ville. </p>
                        </div>
                        <div>
                            <span className="advantage-icon icon-logo-plus" />
                        </div>
                    </div>
                    <div className={'card on-boarding-card ' + (this.state.checkAffordablePrice ? 'activate-card' : 'default-card')} onClick={this.checkAffordablePrice} >
                        <div>
                            <span className="principal-icon icon-insurance" />
                        </div>
                        <div>
                            <p> Prix abordables pour tous </p>
                        </div>
                        <div>
                            <span className="advantage-icon icon-logo-plus" />
                        </div>
                    </div>
                </div>
                <Validation step={'values'} active={this.state.checkFreshFood && this.state.checkPassionCook && this.state.checkCitySocialisation && this.state.checkAffordablePrice} history={this.props.history} />
            </div>
        )
    }
}

export default Values;
