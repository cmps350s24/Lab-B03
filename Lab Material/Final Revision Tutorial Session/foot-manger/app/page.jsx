import Image from "next/image";

import footRepo from "@/app/repo/foot-repo";
import Team from "@/app/teams/Team";

export default async function Home() {
  const teams = await footRepo.getTeams();
  return (
    <>
      <Team teams={teams}></Team>
    </>
  );
}
