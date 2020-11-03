import React, { Component } from "react";
import localforage from "localforage";
import swal from "@sweetalert/with-react";

import styles from "./style.module.scss";
import { Link } from "react-router-dom";

class Trancs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: [],
            transaction: {},
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        swal({
            title: "Are you sure",
            text: `${this.state.transaction.name} has paid your debt ?`,
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                let debtors = this.state.transactions;
                debtors.splice(
                    this.state.transactions.length -
                        this.props.match.params.id -
                        1,
                    1
                );
                localforage
                    .setItem("store", debtors)
                    .then(() =>
                        swal(
                            `${this.state.transaction.name} has paid your money`,
                            {
                                icon: "success",
                                title: "Wow !",
                            }
                        ).then(() => {
                            this.props.history.push("/");
                        })
                    )
                    .catch((err) => console.log(err));
            } else {
                swal(`${this.state.transaction.name} still owes you`, {
                    icon: "warning",
                    title: "Note",
                });
            }
        });
    }

    componentDidMount() {
        localforage
            .getItem("store")
            .then((res) => {
                this.setState({
                    transaction:
                        res[res.length - this.props.match.params.id - 1],
                    transactions: res,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className={styles.Trancs}>
                <h2>Transaction</h2>
                <div className={styles.board}>
                    <div>
                        <h3>Name: </h3>
                        <h3>{this.state.transaction.name}</h3>
                    </div>
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
                        <h3>₦ {this.state.transaction.amount}</h3>
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
                        <button
                            onClick={this.onClick}
                            style={{ backgroundColor: "#081C15" }}
                        >
                            PAID
                        </button>
                    </div>
                </div>

                <br />
                <br />
                <Link to="/transactions">GO BACK</Link>
                <br />
            </div>
        );
    }
}

export default Trancs;
