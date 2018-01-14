import React, { Component } from 'react'
import { Route } from 'react-router'

import WhyChief from './pages/onboarding/whychief'
import Values from './pages/onboarding/values'
import HowItWorks from './pages/onboarding/howitworks'
import ChiefType from './pages/onboarding/chieftype'
import Presentation from './pages/onboarding/presentation'

import './app.css'
import './assets/stylesheets/mndicons.css'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <WhyChief store={this.props.store} history={this.props.history} />} />
                <Route exact path='/whychief' render={() => <WhyChief store={this.props.store} history={this.props.history} />} />
                <Route exact path='/values' render={() => <Values store={this.props.store} history={this.props.history} />} />
                <Route exact path='/howitworks' render={() => <HowItWorks store={this.props.store} history={this.props.history} />} />
                <Route exact path='/chieftype' render={() => <ChiefType store={this.props.store} history={this.props.history} />} />
                <Route exact path='/presentation' render={() => <Presentation store={this.props.store} history={this.props.history} />} />
            </div>
        )
    }
}

export default App
