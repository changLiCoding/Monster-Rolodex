import React, { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = (props) => {
    const { monsters } = props;

    return (
        <div className='card-list' key={monsters.id}>
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