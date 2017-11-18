import React, {Component} from 'react';
import * as API from '../Api/Api';

class Shortner extends Component{
    state = {
        inputdata : "",
        ShortenURL: "",
        CustomURL: "",
        Error: ""
    }

    onShortUrlClicked = (event) => {
        console.log(event);

        var reqObj = {}
        if(this.state.inputdata == "") return;
        reqObj.destination = this.state.inputdata;
        if(this.state.CustomURL != "")
            reqObj.custom = this.state.CustomURL;

        API.postShortenURL(reqObj)
        .then((resData) => {

            console.log(resData);

            if(resData.error != null){
                this.setState({
                    Error: resData.error,
                    ShortenURL: ""
                });
                return
            }  

            if(resData.slug){
                this.setState({
                    ShortenURL : resData.slug,
                    Error : ""
                });
            }
        });
    }

    render(){

        var ShortenURLInfo = "";

        if(this.state.ShortenURL !== ""){
            ShortenURLInfo = <h3>Your Short URL : <a href={this.state.ShortenURL} className="badge badge-secondary shortURLInfo"> {this.state.ShortenURL} </a></h3>;
        }

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

                <div className="row">
                    <div className="col-md-4 offset-md-2 shorten-input">
                        <input type="text" className="form-control" placeholder="Select custom URL here (optional)" 
                            onChange={(event) => this.setState({CustomURL: event.target.value})}></input>
                    </div>
                    <div className="col-md-4 shorten-input error-msg">
                            {this.state.Error}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 offset-md-2">
                            {ShortenURLInfo}
                        </div>
                </div>


            </div>
        )
    }
};

export default Shortner;