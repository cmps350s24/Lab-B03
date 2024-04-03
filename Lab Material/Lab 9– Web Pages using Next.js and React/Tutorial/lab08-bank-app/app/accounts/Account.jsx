import React from 'react'
import styles from '@/app/page.module.css'
export default function Account({ account }) {
    return (
        <tr>
            <td>
                <img src={account.profileImage}
                    alt=""
                    className={styles.profilePic} />
            </td>
            <td>{account.firstname}</td>
            <td>{account.lastname}</td>
            <td>{account.gender}</td>

            <td>{account.accountNo}</td>
            <td>{account.acctType}</td>
            <td>{account.balance}</td>
        </tr>
    )
}
