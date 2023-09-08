import React from 'react';

export default class Alert extends React.Component {
    render() {
        const { name, universe, alterego, occupation, friends, superpowers, url } = this.props;

        return (
            <li className="card__wrap" key={name}>
                <article className="card">
                    <h2 className="card__name">Имя: {name}</h2>
                    <p className="card__universe">Вселенная: {universe}</p>
                    <p className="card__alterEgo">Альтер эго: {alterego}</p>
                    <p className="card__whoIs">Специальность: {occupation}</p>
                    <p className="card__friends">Друзья: {friends}</p>
                    <p className="card__abilities">Способности: {superpowers}</p>
                    <div className="card__img-wrap">
                        <img src={url} alt={name} />
                    </div>
                </article>
            </li>
        );
    }
}