import React, {Component} from 'react';
import * as API from '../Api/Api';

class OSAccessInfo extends Component{
    state = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        clicks: [0, 10, 5, 2, 20, 30, 45]
    }
        
    componentWillMount(){        
        API.getAccessInfo(this.props.shortenedURL, "platform")
            .then((resData) => {

                var labels = [];
                var clicks = [];

                for(var i = 0; i < resData.length; i++){
                    labels.push(resData[i].platform);
                    clicks.push(resData[i].clicks);
                }

                this.setState({
                    labels: labels,
                    clicks: clicks
                })
            });
    }


    componentDidUpdate(){
        window.drawAccessInfoChart(this.state.labels, this.state.clicks, "OSAccessInfo", "OS Access Info");
    }


    render(){


        return(
            <div className="OSAccessInfo">
                <canvas id="OSAccessInfo"></canvas>
            </div>
        )
    }
};

export default OSAccessInfo;