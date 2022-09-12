// import React, { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

import { Monster } from '../../App'

type MonsterinPropsType = {
    monsters: Monster[];
}


const CardList = ({ monsters }: MonsterinPropsType) => {

    return (
        <div className='card-list'>
            {(monsters).map((monster) => {
                return (
                    <Card monster={monster} key={monster.id} />
                );
            })} </div>
    )
}



// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;
//         return <div className='card-list'>
//             {(monsters).map((monster) => {
//                 return (
//                     <Card monster={monster} />
//                 );
//             })} </div>
//     }
// }


export default CardList