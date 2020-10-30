import React, { Component } from "react";
import localforage from "localforage";

import styles from "./style.module.scss";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number: "",
            amount: "",
            network: "",
            desc: "",
            checked: false,
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const date = new Date();
        const dateNow = date.toLocaleString();
        const todaysDate = dateNow.split(",")[0];

        let body = {
            number: this.state.number,
            amount: this.state.amount,
            desc: this.state.desc,
            date: todaysDate,
            debted: this.state.checked,
        };

        console.log(this.state.checked);
        localforage
            .getItem("store")
            .then((res) => {
                console.log(res);
                if (res === null) {
                    localforage
                        .setItem("store", [body])
                        .then(() => console.log(true))
                        .catch((err) => console.log(err));
                } else if (res) {
                    localforage
                        .setItem("store", [...res, body])
                        .then(() => console.log(true))
                        .catch((err) => console.log(err));
                }
            })
            .then(() => {
                this.setState({
                    name: "",
                    number: "",
                    amount: "",
                    network: "",
                    desc: "",
                    checked: false,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className={styles.form}>
                <h1>NEW TRANSACTION</h1>
                <form onSubmit={this.onSubmit}>
                    <div className={styles.input}>
                        <label htmlFor="name">Buyer's Name</label>
                        <input
                            required
                            value={this.state.name}
                            onChange={this.onChange}
                            autoComplete="off"
                            autoCapitalize="on"
                            type="text"
                            id="name"
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="number">Buyer's Number</label>
                        <input
                            required
                            value={this.state.number}
                            onChange={this.onChange}
                            autoComplete="off"
                            type="tel"
                            id="number"
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="amount">Amount</label>
                        <input
                            required
                            value={this.state.amount}
                            onChange={this.onChange}
                            autoComplete="off"
                            type="number"
                            min="50"
                            max="10000"
                            id="amount"
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="network">Network</label>
                        <input
                            required
                            value={this.state.network}
                            onChange={this.onChange}
                            autoComplete="off"
                            type="text"
                            id="network"
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="desc">Short description</label>
                        <input
                            required
                            value={this.state.desc}
                            onChange={this.onChange}
                            autoComplete="off"
                            type="text"
                            id="desc"
                            maxLength="35"
                        />
                    </div>
                    <div className={[styles.input, styles.switch].join(" ")}>
                        <label htmlFor="paid">Paid :</label>
                        <div className={styles.switcher}>
                            <input
                                onChange={this.onChange}
                                defaultChecked={this.state.checked}
                                type="checkbox"
                                id="checked"
                                className={styles.checkbox}
                            />
                            <label htmlFor="checked" className={styles.label}>
                                <div className={styles.ball}></div>
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        style={
                            this.state.checked === "on"
                                ? { backgroundColor: "#FE4A49" }
                                : { backgroundColor: "#081C15" }
                        }
                    >
                        SUBMIT TRANSACTION
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
