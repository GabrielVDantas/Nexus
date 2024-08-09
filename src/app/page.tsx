import Aside from "@/components/shared/Aside";
import Feed from "@/components/shared/Feed";
import "../styles/globals.css"

export default function Home() {
  return (
    <main className="main-container-config">
      <Aside />
      <Feed />
      <Aside />
    </main>
  )
}
