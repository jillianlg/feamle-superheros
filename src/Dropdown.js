import React from 'react'
import './App.css';

export default class Dropdown extends React.Component {
    render() {
        return (
            <div className="drop-down">
                <select onChange={this.props.onDropDown}>
                    <option value="">Sort By Publisher</option>
                    <option value="marvel">Marvel</option>
                    <option value="dc-comics">DC Comics</option>
                    <option value="dark-horse">Dark Horse</option>
                </select>
            </div>
        )
    }
}