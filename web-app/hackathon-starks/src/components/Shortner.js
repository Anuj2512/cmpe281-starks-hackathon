import React, {Component} from 'react';
import * as API from '../Api/Api';

class Shortner extends Component{
    state = {
        inputdata : ""
    }

    onShortUrlClicked = (event) => {
        console.log(event);
        API.postShortenURL({
            url : this.state.inputdata
        })
        .then((resData) => {

        });
    }
        
    render(){
        return(
            <div className="Section-ShortenURL">
            
                <div className="row">
                    <div className="offset-md-2 shorten-title">Simplify your links</div>
                </div>
    
                <div className="row">
                    <div className="col-md-8 offset-md-2 shorten-input input-group">              
                        <input type="text" className="form-control" placeholder="Your original URL here" 
                        onChange={(event) => this.setState({inputdata: event.target.value})}></input>
                        
                            <button className="btn btn-default shorten-btn" type="button" onClick={(event) => this.onShortUrlClicked(event)}>SHORTEN URL</button>
                        
                    </div> 
                </div>
            </div>
        )
    }
};

export default Shortner;