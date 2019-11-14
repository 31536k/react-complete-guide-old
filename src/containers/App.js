import React, {Component} from 'react';
import styleclasses from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context"

class App extends Component {
    state = {
        persons: [
            {id: 'dafd', name: 'Max', age: 28},
            {id: 'adf', name: 'Manu', age: 29},
            {id: 'lij', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false,
        authenticated: false
    }

    static getDerivedStateFromProps(props, state) {
        // console.log('[App.js] getDerivedStateFromProps', props)
        return state
    }

    // switchNameHandler = (newName) => {
    //     this.setState({
    //         persons: [
    //             {name: newName, age: 28},
    //             {name: 'Manu', age: 29},
    //             {name: 'Stephanie', age: 27}
    //         ]
    //     });
    // };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        })

        const updatePerson = {
            ...this.state.persons[personIndex]  // deep copy of person
        }

        updatePerson.name = event.target.value

        const updatePersons = [...this.state.persons]; // deep copy of persons
        updatePersons[personIndex] = updatePerson

        this.setState({persons: updatePersons});
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice()  // slice with no argument just return copy of original array
        const persons = [...this.state.persons] // another way to get copy of original array. spread elements from array and create new array
        persons.splice(personIndex, 1)
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow})
    }

    loginHandler = () => {
        this.setState({
            authenticated: true
        })
    }

    render() {
        let persons = null
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
                isAuthenticated={this.state.authenticated}/>
        }

        return (
            <div className={styleclasses.App}>
                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login: this.loginHandler
                }}>
                    <Cockpit
                        title={this.props.title}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler}
                        />
                    {persons}
                </AuthContext.Provider>
            </div>
        );
    }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
}

export default App;
