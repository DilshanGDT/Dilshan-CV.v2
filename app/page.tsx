import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/NavBar";
import Project from "@/components/project/Project";
import Service from "@/components/servicess/Service";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Header />
      <Service />
      <Project />
    </main>
  );
}