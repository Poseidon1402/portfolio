import { Presentation, ProjectList, Tools } from "@/contents";
import { NavBar } from "@/contents/home/navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <Presentation />
      <ProjectList />
      <Tools />
    </div>
  );
}
