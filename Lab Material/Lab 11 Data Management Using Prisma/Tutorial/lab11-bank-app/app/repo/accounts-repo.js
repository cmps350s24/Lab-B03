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
                return prisma.account.findMany()

            return prisma.account.findMany({
                where: { acctType }
            })
        } catch (error) {
            return { error: error.message }
        }


    }
    async addAccount(account) {

    }

    async updateAccount(accountNo, account) {

    }

    async getAccount(accountNo) {

    }
    async searchOwner(name) {

    }

    async deleteAccount(accountNo) {

    }
    async getTransactions(accountNo) {

    }
    async addTransaction(accountNo, transaction) {
        // update the missing information of the transaction object
        transaction.accountNo = accountNo
        transaction.amount = parseInt(transaction.amount.toString());

    }


}

export default new AccountsRepo()