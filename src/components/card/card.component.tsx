// import React, { Component } from 'react';
import './card.styles.css'

import { Monster } from '../../App'

type MonsterinPropsType = {
    monster: Monster;
}

const Card = (props: MonsterinPropsType) => {
    const { id, name, email } = props.monster;

    return (
        <div className='card-container' key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${name}&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}


// class Card extends Component {
//     render() {
//         const { id, name, email } = this.props.monster;

//         return (<div className='card-container' key={id}>
//             <img alt={`monster ${name}`} src={`https://robohash.org/${name}&size=180x180`} />
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>)
//     }
// }

export default Card;
