import React from 'react'
import './App.css';

export default class Dropdown extends React.Component {
    render() {
        return (
            <div className="drop-down">
                {/* <select onChange={this.props.onPubDropDown}>
                    <option value="">Publisher</option>
                    <option value="marvel">Marvel</option>
                    <option value="dc-comics">DC Comics</option>
                    <option value="dark-horse">Dark Horse</option>
                </select> */}
                <select onChange={this.props.onPubDropDown}>
                    {this.props.publishers.map(publisher =>
                    <option key={publisher.id} value={publisher.id}>
                        {publisher.publisher}
                    </option>)}
                </select>
                <p>Has a feature film with them as the lead character:</p>
                <select onChange={this.props.onFilmDropDown}>
                    <option value="">Feature Film</option>
                    <option value={ true }>Yes</option>
                    <option value= { false }>No</option>
                </select>
            </div>
        )
    }
}