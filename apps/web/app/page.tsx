import { client } from "@repo/db/client"

export default async function Home() {
  const user = await client.user.findFirst()
  return(
    <div>
      {user?.username || "no user found: hoha "}
      {user?.password || "no password found"}
    </div>
  )
}
