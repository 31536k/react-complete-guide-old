import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {id: 'dafd', name: 'Max', age: 28},
            {id: 'adf', name: 'Manu', age: 29},
            {id: 'lij', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
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

    render() {
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '2px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            change={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            )
            style.backgroundColor = 'red'
        }

        const classes = []
        if (this.state.persons.length <= 2) {
            classes.push('red')
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
}

export default App;
