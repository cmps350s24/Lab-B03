import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AccountsRepo {

    async addOwner(owner) {
        try {
            return prisma.owner.create({ data: owner })
        } catch (error) {
            return { error: error.message }
        }
    }
    async getOwners() {
        try {
            return prisma.owner.findMany()
        } catch (error) {
            return { error: error.message }
        }
    }
    async getAccounts(acctType) {
        try {
            if (acctType == "All" || !acctType)
                return prisma.account.findMany({
                    include: {
                        Owner: true
                    }
                })

            return prisma.account.findMany({
                where: { acctType },
                include: {
                    Owner: true
                }
            })
        } catch (error) {
            return { error: error.message }
        }


    }
    async addAccount(account) {
        try {
            return prisma.account.create({ data: account })
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateAccount(accountNo, account) {
        try {
            return prisma.account.update(
                { data: account },
                { where: { accountNo } }
            )
        } catch (error) {
            return { error: error.message }
        }
    }

    async getAccount(accountNo) {
        try {
            return prisma.account.findUnique(
                { where: { accountNo } }
            )
        } catch (error) {
            return { error: error.message }
        }
    }

    async searchOwner(name) {
        try {
            return prisma.owner.findMany(
                {
                    where: {
                        OR: [
                            { firstName: { contains: name } },
                            { lastName: { contains: name } }
                        ]
                    }
                }
            )
        } catch (error) {
            return { error: error.message }
        }
    }

    async deleteAccount(accountNo) {
        try {
            return prisma.account.delete(
                { where: { accountNo } }
            )
        } catch (error) {
            return { error: error.message }
        }
    }
    async getTransactions(accountNo) {
        try {
            return prisma.transaction.findMany(
                { where: { accountNo } }
            )
        } catch (error) {
            return { error: error.message }
        }
    }
    async addTransaction(accountNo, transaction) {
        // update the missing information of the transaction object
        transaction.accountNo = accountNo
        transaction.amount = parseInt(transaction.amount.toString());

        // 1. get the account that we want to deposit or withdraw from
        // 2. we want to know if we are withdrawing or depositing
        // 3. if it is deposit --> just add the money
        // 4. if it is withdrawing --> check if the balance is enough
        // 5.    if it is enough --> withdraw the money
        // 6.    if it is not enough --> return error
        // 7. update the account
        // 8. add the transaction to the database

        try {
            const account = await this.getAccount(accountNo)
            if (transaction.type == 'Deposit') {
                account.balance += transaction.amount
            }
            else {
                if (account.balance < transaction.amount)
                    return { error: 'Not enough balance' }
                account.balance -= transaction.amount
            }
            this.updateAccount(accountNo, account)
            return prisma.transaction.create({ data: transaction })
        } catch (error) {
            return { error: error.message }
        }

    }


}

export default new AccountsRepo()