import React from 'react'
import styles from '@/app/page.module.css'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/accounts/add">Add Account</a></li>
                <li><a href="/accounts/transaction">Transaction</a></li>
            </ul>
        </nav>
    )
}
