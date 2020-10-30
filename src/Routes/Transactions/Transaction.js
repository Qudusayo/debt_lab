import React, { Component } from "react";
import localforage from "localforage";
import { Link } from "react-router-dom";

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
                    {this.state.transactions ? (
                        this.state.transactions.map((transc, index) => {
                            return (
                                <Link key={index} to={`/transactions/${index}`}>
                                    <li>
                                        <div>
                                            <h3>{transc.number}</h3>
                                            <span>
                                                <small>{transc.desc}</small>
                                            </span>
                                        </div>
                                        <div>
                                            <h3
                                                className={
                                                    transc.debted
                                                        ? styles.debt
                                                        : styles.debit
                                                }
                                            >
                                                {transc.amount}
                                            </h3>
                                            <span>
                                                <small>{transc.date}</small>
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                            );
                        })
                    ) : (
                        <h4 style={{ textAlign: "center", opacity: ".4" }}>
                            No Transaction saved
                        </h4>
                    )}
                </ul>
            </div>
        );
    }
}

export default Transaction;
