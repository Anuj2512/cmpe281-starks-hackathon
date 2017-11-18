import React, {Component} from 'react';
// import * as API from '../Api/Api';
import OSAccessInfo from './OSAccessInfo';
import BrowserAccessInfo from './BrowserAccessInfo';
import CountryAccessInfo from './CountryAccessInfo';
import DailyVisitChart from './DailyVisitChart';
import AnalyticsHeader from './AnalyticsHeader';

class Analytics extends Component{
    state = {
        shortenedURL: "shortenedURL",
        originalURL: "originalURL",
        viewCount: 0
    }
        
    componentWillMount(){
        console.log("Component Did Mount");
        console.log(this.props.match.params.id);
        this.setState({
            shortenedURL: this.props.match.params.id
        })
    }

    render(){

        console.log(this.state.shortenedURL)
        
        return(
            <div>
                <div className="AnalyticsHeader">
                        <AnalyticsHeader {...this.state}/>
                </div>
                <div className="row">
                    <div className="col col-md-6">
                        <DailyVisitChart {...this.state}/>
                    </div>
                    <div className="col col-md-6">
                        <CountryAccessInfo {...this.state}/>
                    </div>
                </div>
                <br/>
                <div className="Analytics row">
                    <div className="col col-md-6">
                        <OSAccessInfo {...this.state}/>
                    </div>
                    <div className="col col-md-6">
                        <BrowserAccessInfo {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Analytics;