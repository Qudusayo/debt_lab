import React, { Component } from "react";

import styles from './style.module.scss'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
    }

    render() {
        return (
            <div className={styles.form}>
                <h1>NEW TRANSACTION</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="name">Buyer's Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="number">Buyer's Number</label>
                        <input type="tel" />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" min="50" max="10000" />
                    </div>
                    <div>
                        <label htmlFor="network">Network</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="desc">Short description</label>
                        <input type="text" />
                    </div>
                    <div>
                        <input id="checked" type="checkbox" defaultChecked={this.state.checked} onChange={this.onChange} />
                        <label htmlFor="paid"> Paid</label>
                    </div>
                    <button type="submit" style={this.state.checked === "on" ? {backgroundColor: "rgb(252, 42, 42)"} : { backgroundColor: "rgb(31, 30, 30)" }}>SUBMIT TRANSACTION</button>
                </form>
            </div>
        );
    }
}

export default Form;
