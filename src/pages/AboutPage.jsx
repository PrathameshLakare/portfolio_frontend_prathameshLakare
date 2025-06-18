import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <main className="flex-1">
        <About />
      </main>
    </div>
  );
};
export default AboutPage;
