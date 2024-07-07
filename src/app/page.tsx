import { Presentation } from "@/contents";
import { NavBar } from "@/contents/home/navbar";

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <NavBar />
      <Presentation />
    </div>
  );
}
