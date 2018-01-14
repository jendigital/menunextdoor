import React, { Component } from 'react';

import './index.css';
import Validation from '../components/validation';

class WhyChief extends Component {
    render() {
        return (
            <div className='on-boarding'>
                <div className='header on-boarding-header'>
                    <h3>
                        Pourquoi devenir chef sur menu next door ?
                    </h3>
                    <h5>
                        Cochez chacune des cards pour montrer que vous avez compris.
                    </h5>
                </div>
                <div className='content on-boarding-content'>
                    <div className='card on-boarding-card' >
                        Travaillez depuis chez vous
                    </div>
                    <div className='card on-boarding-card' >
                        Gagnez de l'argent grâce à votre passion
                    </div>
                    <div className='card on-boarding-card' >
                        Partagez votre plaisir de cuisiner
                    </div>
                    <div className='card on-boarding-card' >
                        Simplement sécurisé grâce à une assurance dans la restauration
                    </div>
                </div>
                <Validation />
            </div>
        )
    }
}

export default WhyChief;
