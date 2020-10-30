import React, { Component } from "react";
import localforage from "localforage"
import Card from "./Card";

import styles from "./style.module.scss";

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
        let debit = 0;
        localforage
            .getItem("store")
            .then((res) => {
                res.forEach(el => {
                    if(el.debted){
                        debt  += parseFloat(el.amount)
                    }else{
                        debit  += parseFloat(el.amount)
                    }
                })
                
            }).then(() => {
                if(!debt.toString().includes(".")){
                    debt = debt.toString() + ".00"
                }
                if(!debit.toString().includes(".")){
                    debit = debit.toString() + ".00"
                }
                this.setState({ debt, debit })
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className={styles.Home}>
                <Card cardType="balance" unit={this.state.balance} />
                <Card cardType="credit" unit={this.state.credit} />
                <Card cardType="debit" unit={this.state.debit} />
                <Card cardType="debt" unit={this.state.debt} />
                <button className={styles.addButton} id="add">
                    +
                </button>
            </div>
        );
    }
}

export default Home;
