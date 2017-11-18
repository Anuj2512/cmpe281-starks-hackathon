import React, {Component} from 'react';
import * as API from '../Api/Api';

class Datatable extends Component{
    state = {
        data: [
        ]
    }

    secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

        if(hDisplay != "") return hDisplay + " ago";
        if(mDisplay != "") return mDisplay + " ago";
    
        return sDisplay + " ago"; 
    }

    componentWillMount(){

        API.getShortenURLList({})
            .then((resData) => {

                var dataArray = [];
                for(var i = 0; i < resData.length; i++){
                    var data = [];

                    var t1 = new Date(resData[i].createdAt);
                    var t2 = new Date();
                    var dif = t2.getTime() - t1.getTime();
                    console.log(t1);
                    console.log(t2);
                    console.log(dif);
                    console.log(this.secondsToHms(dif/1000));

                    data.push(resData[i].destination);
                    data.push(this.secondsToHms(dif/1000));
                    data.push(resData[i].slug);

                    dataArray.push(data);
                }

                this.setState({
                    data: dataArray
                })
            });
    }

    componentDidUpdate(){
        window.initDataTable();
    }

    onShowAnalytics = (event) => {
        var link = event.currentTarget.getAttribute("value");
        var url = link.split("/").pop();
        this.props.history.push("/analytics/" + url);
    }

    render(){
        let rows = [];
        for (var i = 0; i < this.state.data.length; i++){
          let rowID = `row${i}`
          let cell = []
          var self = this;
          var value = this.state.data[i][2];
          
          cell.push(<td  key={`cell${i}-${0}`} className="hyperlink"> {this.state.data[i][0]} </td>)
          cell.push(<td key={`cell${i}-${1}`}> {this.state.data[i][1]} </td>)
          cell.push(<td key={`cell${i}-${2}`} className="hyperlink"> {this.state.data[i][2]} </td>)
          cell.push(<td key={`cell${i}-${3}`} className="alignCenter" value={this.state.data[i][2]}  onClick={(event) => self.onShowAnalytics(event)}> <span className="fa fa-bar-chart"></span> <span className="fa  fa-pie-chart"><span className="fa  fa-line-chart"></span></span> </td>)

          rows.push(<tr key={rowID}>{cell}</tr>)
        }

        return(
            <div className="col col-md-8 offset-md-2 data-table">
                <table id="example" className="table table-striped">
                    <thead>
                        <tr>
                            <th>Original URL</th>
                            <th>Created</th>
                            <th>Short URL</th>
                            <th className="alignCenter">Analytics</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
};

export default Datatable;