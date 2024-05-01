import footRepo from "@/app/repo/foot-repo";

export async function GET(request, { }) {
    const teams = await footRepo.getTeams()
    return Response.json(teams, { status: 200 })
}