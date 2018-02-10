import React, {Component} from 'react';
import * as API from '../Api/Api';

class AnalyticsHeader extends Component{
    state = {
        viewCount: 0,
        originalURL: ""
    }

    componentWillMount(){        
        API.getAccessInfo(this.props.shortenedURL, "info")
            .then((resData) => {

                if(resData[0] && resData[0].views && resData[0].originalURL){
                    this.setState({
                        viewCount: resData[0].views,
                        originalURL: resData[0].originalURL
                    })
                }
            });
    }

    
    render(){
        console.log("Header Render ###");
        console.log(this.props);

        var shortenedURL = "http://thepk.xyz/" + this.props.shortenedURL;

        return(
            <div className="row headerfont">
                <div className="col col-md-4">
                        Analytics data for:   <a target="_blank" href={ shortenedURL }> { shortenedURL } </a>
                </div>
                <div className="col col-md-4">
                        Total Views:  {this.state.viewCount}
                </div>
                <div className="col col-md-4">
                        Original URL:  <a target="_blank" href={ this.state.originalURL }> { this.state.originalURL } </a>
                </div>
            </div>
        )
    }
};

export default AnalyticsHeader;