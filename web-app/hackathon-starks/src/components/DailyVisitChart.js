import React, {Component} from 'react';
import * as API from '../Api/Api';

class DailyVisitChart extends Component{
    state = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        clicks: [0, 10, 5, 2, 20, 30, 25]
    }

    componentWillMount(){        
        API.getAccessInfo(this.props.shortenedURL,"dailyvisits")
            .then((resData) => {
                var labels = [];
                var clicks = [];

                for(var i = 0; i < resData.length; i++){
                    labels.push(resData[i].date);
                    clicks.push(resData[i].clicks);
                }

                this.setState({
                    labels: labels,
                    clicks: clicks
                })
            });
    }

    // componentDidMount(){
    //     window.drawDailyVisitChart(this.state.labels, this.state.clicks);
    // }

    componentDidUpdate(){
        window.drawDailyVisitChart(this.state.labels, this.state.data);
    }

    render(){
        return(
                <div>
                    <canvas id="dailyVisitChart"></canvas>
                </div>
        )
    }
};

export default DailyVisitChart;