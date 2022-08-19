import React from 'react';
import { Component } from 'react';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';
import "./App.css"

class App extends Component {
    constructor() {
        super();
        this.state = {
            language: "Javascript",
            languageSwtich: true,
            company: "ShanTui",
            monsters: [],
            searchValue: ''
        }
    }
    componentDidMount() {
        console.log("componentDidMount")
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((user) =>
                this.setState(
                    () => {
                        return { monsters: user };
                    }));
    }
    handleChange = (event) => {
        const searchValue = event.target.value;

        this.setState(
            () => {
                return { searchValue };
            });
    }
    render() {
        const { monsters, searchValue } = this.state;
        const { handleChange } = this;
        const matchedValue = monsters.filter((item) => { return (item.name.toLowerCase()).includes(searchValue.toLowerCase()) });
        return (

            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <SearchBox className='monsters-search-box' onChangeHandler={handleChange} placeHolder='monster search' />
                <CardList monsters={matchedValue} />

            </div>
        )
    }
}

export default App;