import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class FootRepo {
    async addTeam(team) {
        try {
            return prisma.team.create({ data: team })
        } catch (error) {
            return { error }
        }
    }
    async addPlayer(player) {
        try {
            return prisma.player.create({ data: player })
        } catch (error) {
            return { error }
        }
    }
    async updateTeam(id, team) {
        try {
            return prisma.team.update({ data: team, where: { id } })
        } catch (error) {
            return { error }
        }
    }
    async updatePlayer(id, player) {
        try {
            return prisma.player.update({ data: player, where: { id } })
        } catch (error) {
            return { error }
        }
    }
    async deleteTeam(id) {
        try {
            return prisma.team.delete({ where: { id } })
        } catch (error) {
            return { error }
        }
    }
    async deletePlayer(id) {
        try {
            return prisma.player.delete({ where: { id } })
        } catch (error) {
            return { error }
        }
    }

    async getTeams() {
        try {
            return prisma.team.findMany()
        } catch (error) {
            return { error }
        }
    }
    async getTeamPlayers(teamId) {
        try {
            return prisma.player.findMany({
                where: { teamId: teamId }
            })
        } catch (error) {
            return { error }
        }
    }
}

export default new FootRepo()