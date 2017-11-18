import React, {Component} from 'react';
import * as API from '../Api/Api';

class BrowserAccessInfo extends Component{
    state = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        clicks: [0, 10, 5, 2, 20, 30, 45]
    }
        

    componentWillMount(){        
        API.getAccessInfo(this.props.shortenedURL,"browser")
            .then((resData) => {
                var labels = [];
                var clicks = [];

                for(var i = 0; i < resData.length; i++){
                    labels.push(resData[i].browser);
                    clicks.push(resData[i].clicks);
                }

                this.setState({
                    labels: labels,
                    clicks: clicks
                })
            });
    }

    componentDidUpdate(){
        window.drawAccessInfoChart(this.state.labels, this.state.clicks, "BrowserAccessInfo", "Browserwise Access Info");
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