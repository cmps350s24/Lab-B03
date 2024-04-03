import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/accounts/add">Add Account</a></li>
                <li><a href="/accounts/transaction">Transaction</a></li>
            </ul>
        </nav>
    )
}
