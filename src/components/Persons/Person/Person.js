import React, {Component} from 'react'
import styleclasses from './Person.css'
import withClass from "../../../hoc/withClass";
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(prop) {
        super(prop)
        this.inputElementRef = React.createRef()
    }

    componentDidMount() {
        // this.inputElement.focus()
        this.inputElementRef.current.focus()
    }

    render() {
        // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
        return (
            <Aux>
                <AuthContext.Consumer>
                    {context => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input key="i3"
                    // ref={(ie) => {this.inputElement = ie}}
                       ref={this.inputElementRef}
                       type="text"
                       onChange={this.props.change}
                       value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default withClass(Person, styleclasses.Person)