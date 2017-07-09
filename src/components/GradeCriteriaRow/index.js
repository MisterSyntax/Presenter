import React from 'react'
import PropTypes from 'prop-types'

import './GradeCriteriaRow.css'


export default class GradeCriteriaRow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            grade: 0
        }

        this.changeGrade = this.changeGrade.bind(this)
        this.getClass = this.getClass.bind(this)

    }


    /**
     * @description: updates wether the user passed, almost passed or needs improvemnt on the Criteria
     * @param {number} currentGrade - the user's current grade
     */
    changeGrade(currentGrade) {

        let newGrade = (currentGrade + 1) > 2 ? 0 : currentGrade + 1;
        this.setState({ grade: newGrade })

        let adjustment = (newGrade === 0) ? 1 : -.5

        this.props.adjustScore(adjustment)
    }


    /**
     * @desc: stylizes the attribute based on the users grade
     * @param {number} currentGrade - The user's grade on the Criteria
     */
    getClass(currentGrade) {
        switch (currentGrade) {
            case 0: return 'criteria awesome'
            case 1: return 'criteria almost-there'
            case 2: return 'criteria needs-improvement'
        }
    }

    render() {
        return (
            <div
                className={this.getClass(this.state.grade)}
                onClick={() => this.changeGrade(this.state.grade)}>
                {this.props.criteria}
            </div>
        )
    }

}


GradeCriteriaRow.PropTypes = {
    criteria: PropTypes.string.isRequired,
    adjustScore: PropTypes.func.isRequired
}