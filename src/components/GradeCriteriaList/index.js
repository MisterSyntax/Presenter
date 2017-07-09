import React from 'react'
import PropTypes from 'prop-types'

import GradeCriteriaRow from '../GradeCriteriaRow'
require('./GradeCriteriaList.css')

export default class GradeCriteriaList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            score: 20
        }

        this.adjustScore = this.adjustScore.bind(this)
        this.updateScore = this.updateScore.bind(this)
    }

    adjustScore(score, adjustment) {
        this.setState({ score: score + adjustment })
    }

    updateScore(score) {
        return ((adjustment) => {
            this.setState({ score: score + adjustment })
        })
    }

    render() {
        return (
            <div id="criteria-list-container">
                Score:{this.state.score}
                <div className="criteria-list">

                    {this.props.allCriteria.map((criteria) => {
                        return (
                            <GradeCriteriaRow
                                criteria={criteria.criteria}
                                key={criteria.id}
                                adjustScore={this.updateScore(this.state.score)} />
                        )
                    })}
                </div>
            </div>
        )
    }

}

GradeCriteriaList.propTypes = {
    allCriteria: PropTypes.array.isRequired
}