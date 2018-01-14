import React, { Component } from 'react'
import { Route } from 'react-router'

import WhyChief from './pages/onboarding/whychief'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <WhyChief store={this.props.store} history={this.props.history} />} />
            </div>
        )
    }
}

export default App
