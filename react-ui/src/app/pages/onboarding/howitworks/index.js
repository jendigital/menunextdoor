import React, { Component } from 'react';

import './index.css';
import Validation from '../components/validation';

class HowItWorks extends Component {
    render() {
        return (
            <div className='on-boarding'>
                <div className='header on-boarding-header'>
                    <h3>
                        Comment ça marche ?
                    </h3>

                    <h5>
                        Après avoir posté vos plats en ligne puis accepté les commandes de vos clients, 
                        il vous de suivre les étapes suivantes :
                    </h5>
                </div>
                <div className='slideshow on-boarding-slideshow'>
                    <div className='slide'>
                        <h1> 01 </h1>
                        <img src='' alt='' />
                        <h3> Cuisinez depuis chez vous </h3>
                    </div>
                    <div className='slide'>
                        <h1> 02 </h1>
                        <img src='' alt='' />
                        <h3> Emballer les plats </h3>
                    </div>
                    <div className='slide'>
                        <h1> 03 </h1>
                        <img src='' alt='' />
                        <h3> Accueille conviviale de vos clients autour d'un verre. </h3>
                    </div>
                    <div className='slide'>
                        <h1> 04 </h1>
                        <img src='' alt='' />
                        <h3> 
                            Expliquez la création de votre plat 
                            et comment le consommer de la meilleur façon. 
                        </h3>
                    </div>
                    <div className='slide'>
                        <h1> 05 </h1>
                        <img src='' alt='' />
                        <h3> Vos clients emportent vos plats à consommer chez eux ou au travail. </h3>
                    </div>
                    <div className='slide'>
                        <h1> 06 </h1>
                        <img src='' alt='' />
                        <h3> Faites des heureux. </h3>
                    </div>
                    <div className='slide'>
                        <h1> 07 </h1>
                        <img src='' alt='' />
                        <h3> 
                            Aucun paiement nécessaire, il a déjà été effectué par le client sur la plateforme.
                            Le montant vous attend sur votre votre compte en banque.
                        </h3>
                    </div>
                </div>
                <Validation />
            </div>
        )
    }
}

export default HowItWorks;
