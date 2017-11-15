import React, {Component} from 'react';

class Datatable extends Component{
    state = {
        data: [
            ["<a>datatables.net/examples/styling/bootstrap4.html</a>", "12 minutes ago", "https://goo.gl/8nKaHu", 2],
            ["docs.basho.com/riak/kv/2.2.3/developing/getting-started", "12 minutes ago", "https://goo.gl/8nKaHu", 1],
            ["datatables.net/examples/styling/bootstrap4.html", "12 minutes ago", "https://goo.gl/8nKaHu", 4],
            ["docs.basho.com/riak/kv/2.2.3/developing/getting-started", "12 minutes ago", "https://goo.gl/8nKaHu", 5]
        ]
    }
        
    render(){
        let rows = [];
        for (var i = 0; i < this.state.data.length; i++){
          let rowID = `row${i}`
          let cell = []
          for (var idx = 0; idx < this.state.data[i].length; idx++){
            let cellID = `cell${i}-${idx}`

            var value = this.state.data[i][idx];
            if(idx % 2 == 0){
                cell.push(<td key={cellID} id={cellID}> <a herf={value}> {value} </a> </td>)
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