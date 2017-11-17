import React, {Component} from 'react';
import * as API from '../Api/Api';

class AnalyticsHeader extends Component{
    state = {
    }

    componentWillMount(){

        console.log("AnalyticsHeader will mount: ");
        console.log(this.props);
    }
    
    render(){
        console.log("Header Render ###");
        console.log(this.props);

        return(
            <div className="row">
                <div className="col col-md-4">
                        Analytics data for   <a href={ this.props.shortenedURL }> { this.props.shortenedURL } </a>
                </div>
                <div className="col col-md-4">
                        Total Views:  {this.props.viewCount}
                </div>
                <div className="col col-md-4">
                        Original URL:  <a href={ this.props.originalURL }> { this.props.originalURL } </a>
                </div>
            </div>
        )
    }
};

export default AnalyticsHeader;