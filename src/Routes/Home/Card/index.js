import React from "react";
import styles from './style.module.scss'

export default function Index(props) {
    const date = new Date();
    const dateNow = date.toLocaleString();
    const todaysDate = dateNow.split(',')[0]

    return (
        <div className={[styles.creditCard, styles[props.cardType]].join(" ")}>
            <span>
                <small>{props.cardType.toUpperCase()}</small>
            </span>
            <h1>₦ {props.unit}</h1>
            <span>
                <small>as at <b>{todaysDate}</b></small>
            </span>
        </div>
    );
}