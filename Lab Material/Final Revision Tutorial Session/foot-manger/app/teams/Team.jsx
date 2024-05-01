'use client'
import React from 'react'
import styles from "@/app/page.module.css";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Team({ teams }) {
    const router = useRouter()

    async function handleDelete(teamId) {
        const response = await fetch(`/api/teams/${teamId}`, {
            method: "DELETE"
        })
        router.refresh()
    }
    return (
        <div className={styles.teamCards}>
            {
                teams.map(team =>
                    <div className={styles.teamCard}>
                        <p className={styles.teamName}>{team.name}</p>
                        <p className={styles.teamInfo}>{team.division}</p>
                        <p className={styles.teamInfo}>{team.city}</p>
                        <button onClick={e => handleDelete(team.id)}>Delete</button>
                        <Link href={`/teams/${team.id}/players`}>View Players</Link>
                    </div>)
            }
        </div>
    )
}
