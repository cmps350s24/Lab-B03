export async function DELETE(request, { params }) {
    return Response.json({
        message: `DELETE /api/accounts/${params.id}`
    }, {
        status: 200
    });
}