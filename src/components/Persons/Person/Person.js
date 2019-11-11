import React, {Component} from 'react'
import styleclasses from './Person.css'
import withClass from "../../../hoc/withClass";
import Aux from '../../../hoc/Aux'

class Person extends Component {
    render() {
        // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}/>
            </Aux>
        )
    }
}

export default withClass(Person, styleclasses.Person)