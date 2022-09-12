import React, { useState, useEffect, ChangeEvent } from 'react';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';
import "./App.css"

export type Monster = {
    id: string;
    name: string;
    email: string;
}

// type MonsterItemType = {
//     name: string;
// }

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [monsters, setMonsters] = useState<Monster[]>([]);

    const matchedValue = monsters.filter((item) => { return (item.name.toLowerCase()).includes(searchValue.toLowerCase()) });

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((response) => response.json())
        //     .then((user) => setMonsters(user));
        const fetchUsers = async () => {
            const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
            setMonsters(users);
        };
        fetchUsers();
    }, []);
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchValueString = event.target.value;
        setSearchValue(searchValueString);
        console.log(searchValue);
    };

    console.log("React18 double Render");

    return (

        <div className='App'>
            <h1>Monsters Rolodex</h1>
            <SearchBox className='monsters-search-box' onChangeHandler={handleChange} placeholder='monster search' />
            <CardList monsters={matchedValue} />

        </div>
    )
}




// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             language: "Javascript",
//             languageSwtich: true,
//             company: "ShanTui",
//             monsters: [],
//             searchValue: ''
//         }
//     }
//     componentDidMount() {
//         console.log("componentDidMount")
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((user) =>
//                 this.setState(
//                     () => {
//                         return { monsters: user };
//                     }));
//     }
//     handleChange = (event) => {
//         const searchValue = event.target.value;

//         this.setState(
//             () => {
//                 return { searchValue };
//             });
//     }
//     render() {
//         const { monsters, searchValue } = this.state;
//         const { handleChange } = this;
//         const matchedValue = monsters.filter((item) => { return (item.name.toLowerCase()).includes(searchValue.toLowerCase()) });
//         return (

//             <div className='App'>
//                 <h1>Monsters Rolodex</h1>
//                 <SearchBox className='monsters-search-box' onChangeHandler={handleChange} placeHolder='monster search' />
//                 <CardList monsters={matchedValue} />

//             </div>
//         )
//     }
// }

export default App;