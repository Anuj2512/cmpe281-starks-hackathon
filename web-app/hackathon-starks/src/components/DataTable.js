import React, {Component} from 'react';
import * as API from '../Api/Api';

class Datatable extends Component{
    state = {
        data: [
        ]
    }

    componentWillMount(){

        API.getShortenURLList({})
            .then((resData) => {
                this.setState({
                    data: resData
                })
            });
    }

    componentDidUpdate(){
        window.initDataTable();
    }

    onShowAnalytics = (link) => {
        var url = link.split("/").pop();
        this.props.history.push("/analytics/" + url);
    }

    render(){
        let rows = [];
        for (var i = 0; i < this.state.data.length; i++){
          let rowID = `row${i}`
          let cell = []

          var value = this.state.data[i][2];
          
          cell.push(<td  key={`cell${i}-${0}`} className="hyperlink"> {this.state.data[i][0]} </td>)
          cell.push(<td key={`cell${i}-${1}`}> {this.state.data[i][1]} </td>)
          cell.push(<td key={`cell${i}-${2}`} className="hyperlink"> {this.state.data[i][2]} </td>)
          cell.push(<td key={`cell${i}-${3}`} className="alignCenter"  onClick={(event) => this.onShowAnalytics(value)}> <span className="fa fa-bar-chart"></span> <span className="fa  fa-pie-chart"><span className="fa  fa-line-chart"></span></span> </td>)

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