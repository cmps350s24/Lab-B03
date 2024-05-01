import footRepo from "@/app/repo/foot-repo";


export async function GET(request, { params }) {
    const teamId = params.teamId
    const players = await footRepo.getTeamPlayers(teamId)
    return Response.json(players, { status: 200 })
}
