import React from 'react';
import Card from './Card'


export default class CardList extends React.Component {
    render () {

        const { heroData } = this.props;
        
        return (
            <>
            {heroData.map(hero => {
                <Card 
                name={hero.name}
                universe={hero.universe}
                alterego={hero.alterego}
                occupation={hero.occupation}
                friends={hero.friends}
                superpowers={hero.superpowers}
                url={hero.url}
                ></Card>
            })}
            </>
        )

    }
}