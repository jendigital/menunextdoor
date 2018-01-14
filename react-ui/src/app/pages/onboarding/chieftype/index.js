import React, { Component } from 'react';

import './index.css';
import Validation from '../components/validation';

class ChiefType extends Component {
    render() {
        return (
            <div className='on-boarding'>
                <div className='header on-boarding-header'>
                    <h3>
                        Quel type de chef êtes-vous ?
                    </h3>

                    <h5>
                        Avant de créer votre premier menu, 
                        dites nous en plus sur vos attentes de chef sur Menu Next Door.
                        Cochez l'îcone de la catégorie qui vous correspond le mieux.
                    </h5>
                </div>
                <div className='content on-boarding-content'>
                    <div className='card' >
                        <div className='card-header' >Chef Familiale</div>
                        <div className='card-content' >
                            Je cusine tous les soirs en grande quantité pour ma famille et 
                            il me reste toujours des portions supplémentaites
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-header' >Chef Passionné</div>
                        <div className='card-content' >
                            Lorsque j'ai le temps, j'aime tout simplement partager mes 
                            recettes de famille et mes coups de coeurs culinaire avec la 
                            communauté Menu Next Door.
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-header' >Chef Semi Pro</div>
                        <div className='card-content' >
                            Passionnée de cuisine je souhaite exercer le métier de Chef
                            en tant qu'activité complémentaire.
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-header' >Chef Pro</div>
                        <div className='card-content' >
                            Cuisinier, restaurateur ou traiteur de formation,
                            je souhaite exercer le métier de chef à plein temps.
                        </div>
                    </div>
                </div>
                <Validation />
            </div>
        )
    }
}

export default ChiefType;
