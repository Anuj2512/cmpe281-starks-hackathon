import React, {Component} from 'react';
import * as API from '../Api/Api';

class BrowserAccessInfo extends Component{
    state = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        data: [0, 10, 5, 2, 20, 30, 45]
    }
        
    componentWillMount(){
        
        API.getShortenURLList({ url : "xyz"})
            .then((resData) => {
                this.setState({
                    data: resData
                })
            });
    }

    componentDidMount(){
        window.drawAccessInfoChart(this.state.labels, this.state.data, "BrowserAccessInfo", "Browserwise Access Info");
    }

    render(){
        return(
            <div className="BrowserAccessInfo">
                <canvas id="BrowserAccessInfo"></canvas>
            </div>
        )
    }
};

export default BrowserAccessInfo;