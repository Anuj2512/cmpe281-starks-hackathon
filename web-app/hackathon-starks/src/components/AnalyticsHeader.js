import React, {Component} from 'react';
import * as API from '../Api/Api';

class AnalyticsHeader extends Component{
    state = {
        viewCount: 0,
        originalURL: "OriginalURL"
    }

    componentWillMount(){        
        API.getAccessInfo(this.props.shortenedURL, "info")
            .then((resData) => {
                this.setState({
                    viewCount: resData[0].views,
                    originalURL: resData[0].originalURL
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