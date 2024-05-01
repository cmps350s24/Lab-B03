import { log } from 'console'
import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'
import { AccountType } from '@prisma/client'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class AccountsRepo {
    constructor() {

    }

    async getAccounts(type) {
        try {
            await this.getOwners()
            let accounts = []
            if (type == 'Savings' || type == 'Current') {
                console.log('I am inside getAccounts trying to query the database', type);
                return await prisma.account.findMany(
                    {
                        where: {
                            acctType: type
                        }
                    }
                    // {
                    //     select: {
                    //         accountNo: true,
                    //         acctType: true,
                    //         balance: true
                    //     },
                    // }
                )
            }
            return await prisma.account.findMany(
                {
                    include: {
                        Owner: true
                    }
                }
            )
        }
        catch (err) {
            console.log(err);
            return { error: err.message }
        }

    }

    async addAccount(account) {
        try {
            const newAccount = await prisma.account.create({
                data: account
            })
            return newAccount
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateAccount(account, accountNo) {
        // update account
        console.log('updateAccount called', accountNo);
        const updatedAccount = await prisma.account.update({
            where: { accountNo },
            data: account
        })

        if (updatedAccount)
            return "updated successfully"

        return "Unable to update account because it does not exist"
    }

    async getAccount(accNo) {
        console.log('getAccount called');
        const account = await prisma.account.findUnique({
            where: {
                accountNo: accNo
            }
        })

        if (account) return account
        else return { errorMessage: 'Account does not exit' }
    }

    async deleteAccount(accNo) {
        try {
            const count = await prisma.account.delete({
                where: {
                    accountNo: accNo
                }
            })
            return "deleted successfully"
        } catch (err) {
            console.log(err);
            return "Unable to delete account because it does not exist"
        }

    }

    async addTransaction(transaction, accountNo) {
        console.log('addTransaction called', accountNo);
        transaction.amount = parseInt(transaction.amount.toString());
        try {
            const account = await this.getAccount(accountNo);
            console.log(account);

            if (transaction.transType == 'Deposit')
                account.balance += parseInt(transaction.amount);
            else if (account.balance >= transaction.amount)
                account.balance -= parseInt(transaction.amount);
            else
                return { error: 'insufficient balance' }

            await this.updateAccount(account, accountNo);
            const newTransaction = await prisma.transaction.create({
                data: transaction
            })

            return {
                message: 'transaction successful',
                newTransaction
            }

        } catch (err) {
            return {
                error: 'unable to execute the transaction successful',
                errorMessage: err.message
            }
        }
    }


    async getOwners() {

        try {
            return await prisma.owner.findMany()
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async getOwnerReport(ownerId) {
        try {
            return await prisma.owner.findUnique({
                where: { ownerId },
                include: {
                    accounts: {
                        include: { transactions: true }
                    }
                }
            })
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }
    /*
        {
            accountNo : 101,
            deposited : 4000,
            withdrawn : 1000
        }
    */
    async getTransSum(accountNo, fromDate, toDate) {
        try {
            return await prisma.transaction.groupBy({
                by: ["transType"],
                where: {
                    accountNo,
                    date: {
                        gte: new Date(fromDate).toISOString,
                        lte: new Date(toDate).toISOString,
                    },
                },
                _sum: { amount: true }
            })
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }
    async getAvgBalance() {
        try {
            return await prisma.account.aggregate({
                _avg: { balance: true }
            })
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async getMinMaxBalance() {
        try {
            return await prisma.account.aggregate({
                _max: { balance: true },
                _min: { balance: true }
            })
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async getTop3Accounts() {
        try {
            const qObject = {
                orderBy: { balance: 'desc' },
                take: 3
            }

            return await prisma.account.findMany(qObject)
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }
}



function addOrUpdate(params) {
    if (params.add) {
        params.z(params.x, params.y)
        return params.a + params.b
    } else {
        return params.a - params.b
    }
}

addOrUpdate({
    add: true,
    x: 10,
    y: 20,
    z: () => console.log(a)
})