import React, { Component } from "react";
import localforage from "localforage";
import Card from "./Card";
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            balance: "0.00",
            credit: "0.00",
            debit: "0.00",
            debt: "0.00",
        };
    }

    componentDidMount() {
        let debt = 0;
        localforage
            .getItem("store")
            .then((res) => {
                res.forEach((el) => {
                    if (el.amount) {
                        debt += parseFloat(el.amount);
                    }
                });
            })
            .then(() => {
                if (!debt.toString().includes(".")) {
                    debt = debt.toString() + ".00";
                }
                this.setState({ debt });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <Card cardType="debt" unit={this.state.debt} />
            </div>
        );
    }
}

export default Home;
