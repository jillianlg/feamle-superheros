import React, { Component } from 'react'
import request from 'superagent';
import Dropdown from './Dropdown';
import './App.css';

const userFromLocalStorage = {
    userId: 1
};

export default class CreatePage extends Component {

    state = {
        name: '',
        evil_factor: '',
        feature_film: false,
        publisher_id: '',
        owner_id: '',
        publishers: [],
    }

    componentDidMount = async () => {
        const response = await request.get('https://dry-badlands-56059.herokuapp.com/publishers');

        this.setState({ publishers: response.body });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newFemaleHero = {
            id: this.state.id,
            name: this.state.name,
            evil_factor: this.state.evilFactor,
            feature_film: this.state.featureFilm,
            publisher_id: this.state.publisherId,
            owner_id: userFromLocalStorage.userId,
        };


        await request 
        .post('https://dry-badlands-56059.herokuapp.com/females')
        .send(newFemaleHero);

        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({ featureFilm: e.target.value });
        this.setState({ publishersId: e.target.value });
    }

    render() {
        return (
            <div className="create-form">
                <p className="create-form-heading">Add your favorite female comic book hero:</p>
                <form className="form-q" onSubmit={this.handleSubmit}>
                    <input placeholder="Character Name" onChange={e => this.setState({ name: e.target.value})} type="text" />
                    <input placeholder="Level of evil (1-10)"onChange={e => this.setState({ evilFactor: e.target.value})} type="number" />
                    <Dropdown onFilmDropDown={e => this.setState({ featureFilm: e.target.value})}
                            publishers= {this.state.publishers}
                            onPubDropDown={e => this.setState({ publisherId: e.target.value})}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
