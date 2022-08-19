import React from 'react';
import { Component } from 'react';
import CardList from "./components/card-list/card-list.component"
import SearchBox from './components/search-box/search-box.component';

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
        const matchedValue = this.state.monsters.filter((item) => { return (item.name.toLowerCase()).includes(this.state.searchValue.toLowerCase()) });
        return (
            <div className='App'>
                <SearchBox className='search-box' onChangeHandler={this.handleChange} placeHolder='monster search' />
                <CardList monsters={matchedValue} />

            </div>
        )
    }
}

export default App;