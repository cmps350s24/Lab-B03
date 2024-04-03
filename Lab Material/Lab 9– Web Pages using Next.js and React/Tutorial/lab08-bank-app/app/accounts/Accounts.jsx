
'use client'
import { React, useState } from 'react'
import styles from '@/app/page.module.css'
import Account from './Account'


export default function Accounts({ initialAccounts }) {
    // react hook
    const [accounts, setAccount] = useState(initialAccounts)

    async function handleLoadAccounts(type) {
        const url = `/api/accounts?type=${type}`
        const res = await fetch(url)
        const data = await res.json()
        setAccount(data)

    }
    return (
        <>
            <label for="acctType">
                Account Type
            </label>
            <select id="acctType"
                onChange={e => handleLoadAccounts(e.target.value)}
                className={styles.filterDropdown}>

                <option value="All">All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Account No</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(account => <Account account={account} />)}
                </tbody>
            </table>

        </>
    )
}