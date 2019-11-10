import React, {useEffect} from 'react'
import styleclasses from "./Cockpit.css"

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
    }, [])

    let btnClass = ''
    if (props.showPersons) {
        btnClass = styleclasses.Red
    }

    const assignedstyles = []
    if (props.personsLength <= 2) {
        assignedstyles.push(styleclasses.red)
    }

    if (props.personsLength <= 1) {
        assignedstyles.push(styleclasses.bold)
    }

    return (
        <div className={styleclasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedstyles.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    )
}

export default React.memo(Cockpit)