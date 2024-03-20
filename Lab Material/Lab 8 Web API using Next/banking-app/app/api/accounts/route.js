const accounts = [
    { "acctType": "Saving", "balance": 9999999, "minimumBalance": 1000, "accountNo": "xwTQEw8omvIspjznc52Hn" },
    { "acctType": "Saving", "balance": 9090, "minimumBalance": 1000, "accountNo": "a05GpsOzAMPJ6OZ4eA_WG" },
    { "acctType": "Saving", "balance": 9090, "minimumBalance": 1000, "accountNo": "hyCkQZAnt5m1f9ntm-rOU" },
    { "acctType": "Current", "balance": 1100110011, "monthlyFee": 151515, "accountNo": "4G9isZvsErQpKJAF_7SQB" },
    { "acctType": "Current", "balance": 1100110011, "monthlyFee": 151515, "accountNo": "1MzIEOsce7MRXzLTsatKi" },
    { "acctType": "Saving", "balance": "1111", "accountNo": "yqZReSlhItRqR0c51mDEo" },
    { "acctType": "Current", "balance": "9090", "accountNo": "gYAvkYbE1lDm6FXYSTiuu" }
]
// http://localhost:3000/api/accounts?acctType=Saving

export async function GET(request) {
    const { searchParams } = new URL(request.url)

    const acctType = searchParams.get("acctType")

    return Response.json(accounts, { status: 200 })
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


