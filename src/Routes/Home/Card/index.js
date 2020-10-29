import React from "react";
import styles from './style.module.scss'

export default function index(props) {
    return (
        <div className={[styles.creditCard, styles[props.cardType]].join(" ")}>
            <span>
                <small>{props.cardType.toUpperCase()}</small>
            </span>
            <h1>NGN {props.unit}</h1>
            <span>
                <small>as at {props.date}</small>
            </span>
        </div>
    );
}
