import React, { Component } from 'react';

import './index.css';
import Join from '../components/join';

class Presentation extends Component {
    render() {
        return (
            <div className='on-boarding'>
                <div className='header on-boarding-header'>
                    <h3>
                        Présentez vous
                    </h3>

                    <h5>
                        Il est temps de faire de vous un grand chef Menu Next Door !
                    </h5>
                    <h5>
                        Tout d'abord commencez par vous présenter en remplissant les champs suivant.
                    </h5>
                </div>
                <div className='content on-boarding-content'>
                    <form>
                        Bonjour je m'apelle 
                        <input type='text' name='firstname' />
                        <input type='text' name='lastname' />. 
                        Mes amis et ma famille me surnomme
                        <input type='text' name='surname' />. 
                        Je suis 
                        <select>
                            <option> une femme </option>
                            <option> un homme </option>
                        </select>
                        né(e) le <input type='date' name='date-of-birth' />.
                        Je suis 
                        <select name='status' >
                            <option> employé(e) </option>
                            <option> chômeur </option>
                            <option> pensionné </option>
                            <option> indépendant dans l'industrie alimentaire </option>
                            <option> indépendant dans une autre industrie </option>
                            <option> propriétaire d'une société dans l'industrie alimentaire </option>
                            <option> propriétaire d'une société dans une autre industrie </option>
                            <option> étranger sans enregistrement </option>
                        </select>.
                        J'habite dans la belle ville de <input type='text' name='city' /> au 
                        <input type='text' name='street' />. Mon téléphone est le <input type='tel' name='phone' />
                        Je suis célèbre pour ma recette de <input type='text' name='recipe' />
                        Je m'inscris comme chef sur Menu Next Door avec l'adresse email <input type='text' name='email' />.
                        Mon mot de passe magique est <input type='password' name='pwd' />.
                        <select name='emotion'>
                            <option> Je suis enchanté </option>
                            <option> Je pleure de joie </option>
                            <option> Mon rêve se réalise </option>
                            <option> C'est le plus beau jour de ma vie </option>
                        </select>
                        de devenir chef sur Menu Next Door.
                        Pour mon cadeau de bienvenu sur Menu Next Door, j'aimerais recevoir
                        <select name='present'>
                            <option> un bisou de toute l'équipe MND </option>
                            <option> un cookie géant </option>
                            <option> un prince charmant </option>
                            <option> une princesse charmante </option>
                            <option> un lingot d'or </option>
                            <option> les spéculoos de liège de notre chef Mathieu</option>
                        </select>
                    </form>
                </div>
                <Join />
            </div>
        )
    }
}

export default Presentation;
