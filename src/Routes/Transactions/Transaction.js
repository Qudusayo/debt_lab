import React, { Component } from "react";
import localforage from "localforage";

import styles from "./style.module.scss";

class Transaction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: [],
        };
    }

    componentDidMount() {
        localforage
            .getItem("store")
            .then((res) => {
                this.setState({ transactions: res });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className={styles.Transaction}>
                <ul>
                    {this.state.transactions.map((transc, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    <h3>{transc.number}</h3>
                                    <span>
                                        <small>{transc.desc}</small>
                                    </span>
                                </div>
                                <div>
                                    <h3 className={styles.debit}>
                                        {transc.amount}
                                    </h3>
                                    <span>
                                        <small>{transc.date}</small>
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Transaction;
