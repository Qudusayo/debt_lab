import React from "react";
import Card from "./Card";

import styles from "./style.module.scss";

function Home() {
    return (
        <div className={styles.Home}>
            <Card cardType="balance" unit="00.00" />
            <Card cardType="credit" unit="00.00" />
            <Card cardType="debit" unit="00.00" />
            <Card cardType="debt" unit="00.00" />
            <button className={styles.addButton} id="add">
                +
            </button>
        </div>
    );
}

export default Home;
