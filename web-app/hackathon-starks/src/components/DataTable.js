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

    render(){
        let rows = [];
        for (var i = 0; i < this.state.data.length; i++){
          let rowID = `row${i}`
          let cell = []
          for (var idx = 0; idx < this.state.data[i].length; idx++){
            let cellID = `cell${i}-${idx}`

            var value = this.state.data[i][idx];
            if(idx % 2 === 0){
                //cell.push(<td key={cellID} id={cellID} className="hyperlink"> <a herf={value}> {value} </a> </td>)
                cell.push(<td key={cellID} id={cellID} className="hyperlink"> {value} </td>)
            }
            else{
                cell.push(<td key={cellID} id={cellID}> {value} </td>)
            }
          }
          rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        }

        return(
            <div className="col col-md-8 offset-md-2 data-table">
                <table id="example" className="table table-striped">
                    <thead>
                        <tr>
                            <th>Original URL</th>
                            <th>Created</th>
                            <th>Short URL</th>
                            <th>All Clicks</th>                            
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