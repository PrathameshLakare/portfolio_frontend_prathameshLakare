import About from "@/components/About";
import ContactCard from "@/components/ContactCard";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <main className="flex-1">
        <About />
        <ContactCard />
      </main>
    </div>
  );
};
export default AboutPage;
