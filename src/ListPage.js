import React from 'react'
import './App.css';
import { fetchFemales } from './Fetches.js';
import FemaleList from './FemaleList';

export default class App extends React.Component {
    state = {
        filter: '',
        name: '',
        evil: '',
        film: true,
        publisher: '',
        females: [],
    }

    componentDidMount = async () => {
        await this.searchFemales();
    }

    onDropDown = async (e) => {
        await this.setState({ publisher: e.target.value });
        await this.searchFemales();
    }


    searchFemales = async () => {
        const females = await fetchFemales()

        this.setState({
            females,
            loading: false
        })
    }


    render() {
        const { females } = this.state;    
        console.log(females);
        return (
            <div className="user-input">
                <FemaleList
                    femalesProp={this.state.females}
                    evilProp={this.state.evil}
                    filmProp={this.state.females.feature_film}
                    onChange={this.state.publisher} value={this.state.value}/>
            </div>
        )
    }
}