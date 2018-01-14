import React, { Component } from 'react';

import './index.css';
import Validation from '../components/validation';

class Values extends Component {
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
                    <div className='card on-boarding-card' >
                        Produit frais, biologique ou locaux respectueux de notre planète et de notre santé.
                    </div>
                    <div className='card on-boarding-card' >
                        Cuisiné avec amour 
                    </div>
                    <div className='card on-boarding-card' >
                        Créer du lien social avec les habitants de votre quartier et ville.
                    </div>
                    <div className='card on-boarding-card' >
                        Prix abordables pour tous
                    </div>
                </div>
                <Validation />
            </div>
        )
    }
}

export default Values;
