import lib from 'fs-extra'
import React from 'react'
import styles from '@/app/page.module.css'
import Account from './Account'
/*

        "accountNo": "AC1102",
        "acctType": "Current",
        "balance": 711,
        "monthlyFee": 15,
        "firstname": "Mohammed",
        "lastname": "Ali",
        "email": "mohammed.ali@example.com",
        "dateOpened": "2023-01-15",
        "gender": "Male",
        "profileImage": "https://randomuser.me/api/portraits/men/15.jpg"
    },
    */
export default async function Accounts({ accounts }) {

    return (
        <>
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