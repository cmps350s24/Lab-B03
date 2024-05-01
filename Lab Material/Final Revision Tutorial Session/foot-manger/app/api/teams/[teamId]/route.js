import footRepo from "@/app/repo/foot-repo";


export async function DELETE(request, { params }) {
    const teamId = params.teamId
    const response = await footRepo.deleteTeam(teamId)
    return Response.json(teams, { status: 200 })
}
