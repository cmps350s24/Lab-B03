export async function GET(request) {
    return Response.json({ message: "Welcome to /api/account GET method" }, { status: 200 })
}