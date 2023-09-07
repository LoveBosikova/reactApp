import React from 'react';
import Card from './Card'


export default class CardList extends React.Component {
    render () {

        const { heroData } = this.props;

        if (heroData.length === 0) {
            return null;
          }
        
        return heroData && (
            <ul>
            {heroData.map(hero => {
                return <Card 
                key={hero.name}
                name={hero.name}
                universe={hero.universe}
                alterego={hero.alterego}
                occupation={hero.occupation}
                friends={hero.friends}
                superpowers={hero.superpowers}
                url={hero.url}
                ></Card>
            })}
            </ul>
        )

    }
}