import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Main from '../Main/Main';
import Product from '../Product/Product';

class RouterURL extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/main" component={Main}/>
                    <Route exact path="/products" component={Product}/>
                </div>
            </Router>
        );
    }
}

export default RouterURL;