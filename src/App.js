import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Home from "./Routes/Home/Home";
import Form from './Routes/Form/Form'
import Transaction from './Routes/Transactions/Transaction'

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Route path="/" exact component={Home} />
                <Route path="/form" exact component={Form} />
                <Route path="/transactions" exact component={Transaction} />
            </>
        );
    }
}

export default App;
