import React, {Component} from 'react';
import * as API from '../Api/Api';

class AnalyticsHeader extends Component{
    state = {
        viewCount: 0,
        originalURL: "OriginalURL"
    }

    componentWillMount(){
        console.log("AnalyticsHeader will mount: ");
        console.log(this.props);
    }

    componentWillMount(){        
        API.getShortenURLInfo(this.props.shortenedURL)
            .then((resData) => {
                this.setState({
                    viewCount: resData.viewCount,
                    originalURL: resData.originalURL
                })
            });
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
                        Total Views:  {this.state.viewCount}
                </div>
                <div className="col col-md-4">
                        Original URL:  <a href={ this.state.originalURL }> { this.state.originalURL } </a>
                </div>
            </div>
        )
    }
};

export default AnalyticsHeader;