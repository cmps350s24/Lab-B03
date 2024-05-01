import React from 'react'
import footRepo from '@/app/repo/foot-repo';
import styles from '@/app/page.module.css'

export default async function page({ params, }) {
    const teamId = params.teamId;
    const players = await footRepo.getTeamPlayers(teamId)
    return (
        {
            players.map(player =>
                <div className={styles.teamCards}>
                    <div className={styles.teamCard}>
                        <p className={styles.teamName}></p>
                        <p className={styles.teamInfo}></p>
                        <p className={styles.teamInfo}></p>
                    </div>
                </div>
        }
    )
}
