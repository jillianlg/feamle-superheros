import React from 'react'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <section>
                <div className="header">
                    <h1 className="header-title">Female Superheroes</h1>
                    <img className='hero-img' src="/hero.jpg" alt='femal superheroes' width="900px"/>
                </div>
                <nav>
                    <ul className='nav'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/create" >Add Your Favorite</Link>
                        </li>
                        {/* <li>
                            <Link to="/detail" >Update</Link>
                        </li> */}
                    </ul>
                </nav>
            </section>
    
        )
    }
}