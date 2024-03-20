export async function GET(request) {
    return Response.json({ message: "Welcome to /api/account GET method" }, { status: 200 })
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
