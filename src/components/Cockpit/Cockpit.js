import React from 'react'
import styleclasses from "./Cockpit.css"

const Cockpit = (props) => {

    const assignedstyles = []

    let btnClass = ''
    if (props.showPersons) {
        btnClass = styleclasses.Red
    }

    if (props.persons.length <= 2) {
        assignedstyles.push(styleclasses.red)
    }

    if (props.persons.length <= 1) {
        assignedstyles.push(styleclasses.bold)
    }

    return (
        <div className={styleclasses.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedstyles.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    )
}

export default Cockpit