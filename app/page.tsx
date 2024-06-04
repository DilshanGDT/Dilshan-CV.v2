import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/NavBar";
import Project from "@/components/project/Project";
import Service from "@/components/servicess/Service";
import Tech from "@/components/technologies/Tech";

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <Header />
      <Service />
      <Project />
      <Tech />
      <Contact />
      <Footer />
    </main>
  );
}
