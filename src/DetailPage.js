import React, { Component } from 'react'
import Dropdown from './Dropdown';
import { deleteFemale, fetchFemaleId, fetchPublishers, updateFemale } from './Fetches';

const userFromLocalStorage = {
    userId: 1
};

export default class DetailPage extends Component {
    state = {
        name: '',
        evilFactor: '',
        feature_film: false,
        publisherId: '',
        owner_id: '',
        publishers: [],
    }

    // on mount, we fetch the females and the publisher
    componentDidMount = async () => {
        const publishers = await fetchPublishers();
        const female = await fetchFemaleId(this.props.match.params.id);
        // then put those in state
        const publisherNameAsAString = female.publisher;

        const matchingPublisher = publishers.find((pubItem) => {
            return pubItem.publishers === publisherNameAsAString
        });

        this.setState({
            publishers: publishers,
            name: female.name,
            evilFactor: female.evil_factor,
            featureFilm: female.feature_film,
            publisherId: matchingPublisher.id,
            owner_id: female.owner_id,
        })
        
    }
    
    // when the user submits and edit
    handleEdit = async (e) => {
        e.preventDefault();
        // shoot that data off to our endpoint using a post request
        await updateFemale(this.props.match.params.id,
            {
              // build a new female hero using the form data from the users input and their localSotrage token
                name: this.state.name,
                evil_factor: this.state.evilFactor,
                feature_film: this.state.featureFilm,
                publisher_id: this.state.publisherId,
                owner_id: userFromLocalStorage.userId,
            });
            // redirect the user home so they can see the new female hero.
            this.props.history.push('/');
    }

        // when the user deletes a female
        handleDelete = async (e) => {
            e.preventDefault();
            // shoot that data off to our endpoint using a delete request
            await deleteFemale(this.props.match.params.id,
                {
                  // delete the selected female
                    name: this.state.name,
                    evil_factor: this.state.evilFactor,
                    feature_film: this.state.featureFilm,
                    publisher_id: this.state.publisherId,
                    owner_id: userFromLocalStorage.userId,
                });
                // redirect the user home so they can see the new female hero.
                this.props.history.push('/');
        }
        // Add onClick for delete button

    // event handeler for the publisher and film dropdown
    handleChange = (e) => {
        this.setState({ featureFilm: e.target.value });
        this.setState({ publishersId: e.target.value });
    }

    render() {
        console.log(this.state);
        return (
            
            <div className="create-form">
                <h2 className="create-form-heading">Edit or delete a female superhero:</h2>
                <form className="form-q" onSubmit={this.handleEdit}>
                <input placeholder="Character Name" 
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value})} type="text" />
                    <input 
                    placeholder="Level of evil 1-10?"
                    value={this.state.evilFactor}
                    onChange={e => this.setState({ evilFactor: e.target.value})} 
                    type="number" />
                    <Dropdown onFilmDropDown={e => this.setState({ featureFilm: e.target.value})}
                            publishers= {this.state.publishers}
                            onPubDropDown={e => this.setState({ publisherId: e.target.value})}/>
                    <button className="edit-btn">Edit</button>
                </form>
                    <button className="delete-btn" onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}