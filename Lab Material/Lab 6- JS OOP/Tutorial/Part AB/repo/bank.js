const accounts = [
    {
        accountNo: 123,
        balance: 1000,
        type: 'saving'
    },
    {
        accountNo: 234,
        balance: 2000,
        type: 'current'
    }
]
export function getAccounts() {
    return accounts;
}

export function addAccount(account) {
    accounts.push(account);
}
export function deposit(accountNo, amount) {
    const account = accounts.find(account => account.accountNo === accountNo)
    if (!account || amount < 0) return false
    account.balance += amount
    return true

}
export function withdraw(accountNo, amount) {
    const account = accounts.find(account => account.accountNo === accountNo)
    if (!account || amount > account.balance) return false
    account.balance -= amount
    return true
}

export function getAccount(accountNo) {
    return accounts.find(account => account.accountNo === accountNo)
}
export function deleteAccount(accountNo) {
    const index = accounts
        .findIndex(account => account.accountNo === accountNo)
    accounts.splice(index, 1)
}

export function sumBalance() {
    return accounts.reduce((acc, account) => acc + account.balance, 0)
}

export function averageBalance() {
    return sumBalance() / accounts.length
}

export function toJson() {
    return JSON.stringify(accounts)
}

export function fromJson(json) {
    return JSON.parse(json)
}

console.log(toJson());