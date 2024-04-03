import lib from 'fs-extra'
import React from 'react'
import accountRepo from '@/app/repo/accounts-repo'
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
export default async function Accounts() {
    const accounts = await accountRepo.getAccounts()
    return (
        <>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Image</th>
                    <th>Account No</th>
                    <th>Balance</th>
                </tr>
                {
                    accounts.map(account => <tr>
                        <td>{account.firstname}</td>
                        <td>{account.lastname}</td>
                        <td>{account.gender}</td>
                        <td>
                            <img src={account.profileImage} alt="" />
                        </td>
                        <td>{account.accountNo}</td>
                        <td>{account.balance}</td>
                    </tr>)
                }
            </table>

        </>
    )
}