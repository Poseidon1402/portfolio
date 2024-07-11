import { Presentation, ProjectList } from "@/contents";
import { NavBar } from "@/contents/home/navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <Presentation />
      <ProjectList />
    </div>
  );
}
