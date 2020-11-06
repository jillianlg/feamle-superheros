import React, { Component } from 'react'
import Dropdown from './Dropdown';
import { fetchFemales, fetchPublishers, updateFemale } from './Fetches';

const userFromLocalStorage = {
    userId: 1
};

export default class DetailPage extends Component {
    state = {
        name: '',
        evil_factor: '',
        feature_film: false,
        publisher_id: '',
        owner_id: '',
        publishers: [],
    }

    // on mount, we fetch the females and the publisher
    componentDidMount = async () => {
        const publishers = await fetchPublishers();
        const female = await fetchFemales(this.props.match.params.id);
        // then put those in state
        const publisherNameAsAString = female.publisher;

        const matchingPublisher = publishers.find((pubItem) => {
            return pubItem.publishers === publisherNameAsAString
        });

        this.setState({
            publishers: publishers,
            // we need to tie our form state to the initial females fetch
            name: female.name,
            evilFacture: female.evil_factor,
            featureFilm: female.feature_film,
            publisherId: matchingPublisher.id,
            owner: female.owner_id,
        })
    }
    
    // when the user submits
    handleSubmit = async (e) => {
        e.preventDefault();
        // shoot that data off to our endpoint using a post request
        await updateFemale(this.props.match.params.id,
            {
              // build a new female hero using the form data from the users input and their localSotrage token
                id: this.state.id,
                name: this.state.name,
                evil_factor: this.state.evilFactor,
                feature_film: this.state.featureFilm,
                publisher_id: this.state.publisherId,
                owner_id: userFromLocalStorage.userId,
            });
            // redirect the user home so they can see the new female hero.
            this.props.history.push('/');
    }

    // event handeler for the publisher and film dropdown
    handleChange = (e) => {
        this.setState({ featureFilm: e.target.value });
        this.setState({ publishersId: e.target.value });
    }

    render() {
        return (
            
            <div className="create-form">
                <p className="create-form-heading">Update your favorite female comic book hero:</p>
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
