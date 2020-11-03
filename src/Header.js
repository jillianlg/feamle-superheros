import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="header-title">Female Superheroes</h1>
                <img className='hero-img' src="hero.jpg" alt='femal superheroes'/>
            </div>
        )
    }
}