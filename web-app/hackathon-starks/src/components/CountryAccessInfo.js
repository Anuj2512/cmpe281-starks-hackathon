import React, {Component} from 'react';
import * as API from '../Api/Api';

class CountryAccessInfo extends Component{
    state = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        clicks: [0, 10, 5, 2, 20, 30, 45]
    }

    componentWillMount(){        
        API.getAccessInfo(this.props.shortenedURL, "country")
            .then((resData) => {

                var labels = [];
                var clicks = [];

                for(var i = 0; i < resData.length; i++){
                    labels.push(resData[i].country);
                    clicks.push(resData[i].clicks);
                }

                this.setState({
                    labels: labels,
                    clicks: clicks
                })
            });
    }

        
    componentDidUpdate(){
        window.drawAccessInfoChart(this.state.labels, this.state.clicks, "CountryAccessInfo", "Countrywise Access Info");
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