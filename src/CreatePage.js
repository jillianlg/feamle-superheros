import React, { Component } from 'react'
import Dropdown from './Dropdown';
import './App.css';
import { createFemale, fetchPublishers } from './Fetches';

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

        
        const publishers = await fetchPublishers();

        this.setState({ publishers });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createFemale ({
            id: this.state.id,
            name: this.state.name,
            evil_factor: this.state.evilFactor,
            feature_film: this.state.featureFilm,
            publisher_id: this.state.publisherId,
            owner_id: userFromLocalStorage.userId,
        });

    // then redirect the user home so they can see the new female hero.
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
