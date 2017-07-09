import React from 'react'
import './App.css'
import gradingCriteria from '../../GradeCriteria.json'

import GradeCriteriaList from '../GradeCriteriaList/'

export default class App extends React.Component {

    render() {
        return(
            <div id="App">
                <GradeCriteriaList allCriteria={gradingCriteria.allCriteria} />
            </div>
        )
    }
}
