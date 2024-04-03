import lib from 'fs-extra'
import React from 'react'
import styles from '@/app/page.module.css'
import Account from './Account'

export default async function Accounts({ accounts }) {

    return (
        <>
            <label for="acctType">
                Account Type
            </label>
            <select id="acctType"
                onchange="handleLoadAccounts(this.value)"
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