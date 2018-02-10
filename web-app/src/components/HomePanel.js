import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
// import * as API from '../Api/Api';
import Shortner from './Shortner';
import DataTable from './DataTable';
import Analytics from './Analytics';

class HomePanel extends Component {

    state = {  
    };

    render() {
        return (
            <div className="container-fluid">
                <Route exact path="/" render={(props) => (
                    <div>
                        <Shortner/>
                        <DataTable {...props}/>
                    </div>
                )}/>

                <Route exact path="/analytics/:id" render={(props) => (
                    <div>
                        <Analytics {...props}/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(HomePanel);