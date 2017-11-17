import React, {Component} from 'react';
import * as API from '../Api/Api';

class CountryAccessInfo extends Component{
    state = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        data: [0, 10, 5, 2, 20, 30, 45]
    }
        
    componentDidMount(){
        window.drawAccessInfoChart(this.state.labels, this.state.data, "CountryAccessInfo", "Countrywise Access Info");
    }

    render(){

        return(
            <div className="CountryAccessInfo">
                <canvas id="CountryAccessInfo"></canvas>
            </div>
        )
    }
};

export default CountryAccessInfo;