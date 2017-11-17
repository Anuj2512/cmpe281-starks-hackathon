import React, {Component} from 'react';
import * as API from '../Api/Api';

class DailyVisitChart extends Component{
    state = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        data: [0, 10, 5, 2, 20, 30, 25]
    }
    
    componentWillMount(){

    }

    componentDidMount(){
        window.drawDailyVisitChart(this.state.labels, this.state.data);
        // var self = this;
        // setTimeout(function(){
        //     self.setState({
        //         labels: ["January", "February", "March", "April", "May", "June", "July"],
        //         data : [59, 2, 20, 30, 4, 50, 10]
        //     });
        // }, 3000);
    }

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