import React from 'react';
import './App.css';


export default class FemaleItem extends React.Component {
    render() {
        return (
            <div className="female-hero">
                <h3 className="name">{this.props.name}</h3>
                <p className="evil">Evil Level: {this.props.evil}</p>
                <p className="film">Has a feature film: {this.props.film}</p>
                <p className="publisher">Publisher: {this.props.publisher}</p>
            </div>
        )
    }
}