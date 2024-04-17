"use client"
import { React, useState, useEffect } from 'react'
import styles from '@/app/page.module.css'
import { useRouter } from 'next/navigation'

export default function Transaction() {
    const [accounts, setAccounts] = useState([])
    const router = useRouter()
    function handleSubmit(e) {
        e.preventDefault()
        const transaction = Object.fromEntries(new FormData(e.target))

        const url = `/api/accounts/${transaction.accountNo}/trans`
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        })
        router.push('/')

    }

    async function getAccounts() {
        const response = await fetch('/api/accounts')
        return await response.json()
    }

    useEffect(() => {
        getAccounts().then(data => setAccounts(data))
    }, [])

    return (
        <>
            <h3 className={styles.title}>Add Transaction</h3>
            <form id="trans-form" className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="accountNo">Account No</label>
                <select name="accountNo" id="accountNo" >
                    {accounts.map(account => <option key={account.accountNo} value={account.accountNo}>
                        {account.accountNo} - {account.firstname} {account.lastname} - {account.balance}

                    </option>)}
                </select>

                <label htmlFor="type">Transaction Type</label>
                <select name="transType" id="transType" required>
                    <option></option>
                    <option value="Deposit">Deposit</option>
                    <option value="Withdraw">Withdraw</option>
                </select>

                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" required />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}


// rfc