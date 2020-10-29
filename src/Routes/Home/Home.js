import React from 'react'
import Card from './Card'

function Home() {
    return (
        <div>
            <Card cardType="balance" unit="25,000" date="20/10/2020" />
            <Card cardType="credit" unit="40,000" date="20/10/2020" />
            <Card cardType="debit" unit="10,050" date="20/10/2020" />
            <Card cardType="debt" unit="16,000" date="20/10/2020" />
        </div>
    )
}

export default Home
