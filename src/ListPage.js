import React from 'react'
import './App.css';
import request from 'superagent';
import FemaleList from './FemaleList';

export default class App extends React.Component {
    state = {
        filter: '',
        name: '',
        evil: '',
        film: true,
        publisher: '',
        femalesData: [],
    }

    componentDidMount = async () => {
        await this.searchFemales();
    }

    onDropDown = async (e) => {
        await this.setState({ publisher: e.target.value });
        await this.searchFemales();
    }


    searchFemales = async () => {
        const response = await request.get(`https://dry-badlands-56059.herokuapp.com/females`)

        this.setState({
            femalesData: response.body,
            loading: false
        })
    }


    render() {
    
        return (
            <div className="user-input">
                <FemaleList
                    femalesProp={this.state.femalesData}
                    evilProp={this.state.evil}
                    filmProp={this.state.femalesData.feature_film}
                    onChange={this.state.publisher} value={this.state.value}/>
            </div>
        )
    }
}