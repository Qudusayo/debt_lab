import React, { Component } from "react";
import localforage from "localforage";

import styles from './style.module.scss';
import { Link } from "react-router-dom"

class Trancs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transaction: {},
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        localforage
            .getItem("store")
            .then((res) => {
                this.setState({ transaction: res[this.props.match.params.id] });
                console.log(res[this.props.match.params.id]);
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className={styles.Trancs}>
                <h2>Transaction</h2>
                <div className={styles.board}>
                    <div>
                        <h3>Number: </h3>
                        <h3>{this.state.transaction.number}</h3>
                    </div>
                    <div>
                        <h3>Description: </h3>
                        <h3>{this.state.transaction.desc}</h3>
                    </div>
                    <div>
                        <h3>Amount: </h3>
                        <h3>{this.state.transaction.amount}</h3>
                    </div>
                    <div>
                        <h3>Date: </h3>
                        <h3>{this.state.transaction.date}</h3>
                    </div>
                    <div>
                        <h3>Paid: </h3>
                        <h3>{this.state.transaction.debted ? "Yes" : "No"}</h3>
                    </div>
                    <div>
                        <h3>Pool: </h3>
                        <h3>{this.state.transaction.number}</h3>
                    </div>
                </div>
                
                <br/>
                <br/>
                <br/>
                <Link to="/transactions">GO BACK</Link>
            </div>
        );
    }
}

export default Trancs;
