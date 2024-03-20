import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()
// http://localhost:3000/api/accounts?acctType=Saving

export async function GET(request) {
    const { searchParams } = new URL(request.url)

    const accounts = await accountsRepo.getAccounts()
    return Response.json(filteredAccounts, { status: 200 })
}
export async function PUT(request) {
    return Response.json({ message: "Welcome to /api/account PUT method" }, { status: 200 })
}

export async function DELETE(request) {
    return Response.json({ message: "Welcome to /api/account DELETE method" }, { status: 200 })
}

export async function POST(request) {
    return Response.json({ message: "Welcome to /api/account POST method" }, { status: 200 })
}