import React from 'react'
import FemaleItem from './FemaleItem.js';
import './App.css';

export default class FemaleList extends React.Component {
    render() {

        return (
            <div >
            {
                    this.props.femalesProp.length === 0
                    ? <iframe
                        src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" 
                        title={Math.random()} 
                        width="480" 
                        height="480" 
                        frameBorder="0" 
                        className="giphy-embed" 
                        allowFullScreen/>

                :    <div className="female-group">
        
                    {
                        this.props.femalesProp.filter((item) => {
                            // console.log(this.props.onDropDown);
                            if (!this.props.onDropDown) return true;
                            if (item.publisher === this.props.onDropDown) return true;
                            return false;
                        })

                        .map((females, i) => {
                        return (
                        <FemaleItem 
                        key = {i}
                        name={females.name}
                        evil={females.evil_factor} 
                        film={females.feature_film.toString()}
                        publisher={females.publisher}/>
                        )
                        })
                    }
                    </div>
                    
            }
                </div>
        
        )
    }
}