import { Input } from "@/components";
import { ContactMe, Presentation, ProjectList, Tools } from "@/contents";
import { NavBar } from "@/contents/home/navbar";

export default function Home() {
  return (
    <div className="bg-white px-12 laptop:px-32 desktop:px-48">
      <NavBar />
      <Presentation />
      <ProjectList />
      <Tools />
      <ContactMe />
    </div>
  );
}
